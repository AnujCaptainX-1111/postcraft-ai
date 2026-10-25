/**
 * LinkedIn Post Generator AI - Application Controller (app.js)
 * Manages UI interactions, event listeners, loading animations, clipboard, and state.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const topicInput = document.getElementById('topic-input');
  const btnClearInput = document.getElementById('btn-clear-input');
  const toneSelect = document.getElementById('tone-select');
  const btnGenerate = document.getElementById('btn-generate');
  const quickChips = document.querySelectorAll('.chip');

  // Preview elements
  const previewEmptyState = document.getElementById('preview-empty-state');
  const previewSkeleton = document.getElementById('preview-loading-skeleton');
  const linkedinCard = document.getElementById('linkedin-post-card');
  const postContentText = document.getElementById('post-content-text');
  const loadingStatusText = document.getElementById('loading-status-text');

  // Toolbar Actions
  const btnCopy = document.getElementById('btn-copy');
  const btnRegenerate = document.getElementById('btn-regenerate');
  const btnClear = document.getElementById('btn-clear');

  // Metrics Bar
  const statCharCount = document.getElementById('stat-char-count');
  const statWordCount = document.getElementById('stat-word-count');
  const statReadTime = document.getElementById('stat-read-time');
  const statHashtagCount = document.getElementById('stat-hashtag-count');

  // Author customization
  const authorNameInput = document.getElementById('author-name');
  const authorHeadlineInput = document.getElementById('author-headline');
  const cardAuthorName = document.getElementById('card-author-name');
  const cardAuthorHeadline = document.getElementById('card-author-headline');
  const cardAvatarInitials = document.getElementById('avatar-initials');

  // LinkedIn Card Interaction Elements
  const btnLikeAction = document.getElementById('btn-like-action');
  const reactionsCountDisplay = document.getElementById('reactions-count-display');
  const toastContainer = document.getElementById('toast-container');

  // Header status indicator
  const headerStatusDot = document.getElementById('header-status-dot');
  const headerStatusText = document.getElementById('header-status-text');

  // State
  let currentPostData = null;
  let isGenerating = false;
  let isLiked = false;
  let baseReactions = 482;

  // Check backend AI server status on startup
  checkBackendStatus();

  // --- Initialize Event Listeners ---
  initEventListeners();

  async function checkBackendStatus() {
    try {
      const response = await fetch('/api/status');
      if (response.ok) {
        const data = await response.json();
        if (data.aiEnabled) {
          if (headerStatusText) headerStatusText.textContent = 'Gemini AI Active 🟢';
          if (headerStatusDot) headerStatusDot.style.backgroundColor = '#057642';
        } else {
          if (headerStatusText) headerStatusText.textContent = 'Backend Ready (Add Key in .env)';
          if (headerStatusDot) headerStatusDot.style.backgroundColor = '#B25E02';
        }
      }
    } catch {
      // Offline / direct file mode
      if (headerStatusText) headerStatusText.textContent = 'Offline Engine Active';
      if (headerStatusDot) headerStatusDot.style.backgroundColor = '#0A66C2';
    }
  }

  function initEventListeners() {
    // Generate on click
    btnGenerate.addEventListener('click', handleGenerate);

    // Generate on 'Enter' key inside topic input
    topicInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleGenerate();
      }
    });

    // Toggle clear icon inside input
    topicInput.addEventListener('input', () => {
      if (topicInput.value.trim().length > 0) {
        btnClearInput.classList.remove('hidden');
      } else {
        btnClearInput.classList.add('hidden');
      }
    });

    // Clear input button
    btnClearInput.addEventListener('click', () => {
      topicInput.value = '';
      btnClearInput.classList.add('hidden');
      topicInput.focus();
    });

    // Quick starter chips
    quickChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const selectedTopic = chip.getAttribute('data-topic');
        topicInput.value = selectedTopic;
        btnClearInput.classList.remove('hidden');

        // Highlight active chip
        quickChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        // Trigger generation immediately
        handleGenerate();
      });
    });

    // Copy button
    btnCopy.addEventListener('click', handleCopyPost);

    // Regenerate button
    btnRegenerate.addEventListener('click', () => {
      if (isGenerating) return;
      if (!topicInput.value.trim() && currentPostData) {
        topicInput.value = currentPostData.topic;
      }
      handleGenerate();
    });

    // Clear all button
    btnClear.addEventListener('click', handleClearAll);

    // Live editable content sync
    postContentText.addEventListener('input', handleContentEdited);

    // Author customization inputs
    authorNameInput.addEventListener('input', updateAuthorDisplay);
    authorHeadlineInput.addEventListener('input', updateAuthorDisplay);

    // LinkedIn Card Interactive Like Button
    btnLikeAction.addEventListener('click', toggleLike);
  }

  /**
   * Handles Post Generation via Express Backend API (with graceful fallback)
   */
  async function handleGenerate() {
    const rawTopic = topicInput.value.trim();

    if (!rawTopic) {
      showToast('Please enter a topic or select one of the suggested keywords.', 'warning');
      topicInput.focus();
      return;
    }

    if (isGenerating) return;
    isGenerating = true;

    // UI: switch to loading state
    previewEmptyState.classList.add('hidden');
    linkedinCard.classList.add('hidden');
    previewSkeleton.classList.remove('hidden');
    btnGenerate.disabled = true;
    btnGenerate.style.opacity = '0.7';

    // Simulated multi-step AI progress messages
    const statusSteps = [
      'Sending prompt to Node.js / Express backend...',
      'Connecting to Google Gemini AI API...',
      'Structuring hook, core value & practitioner insight...',
      'Validating 4-6 high-reach hashtags...'
    ];

    try {
      // Step through status indicators
      for (let i = 0; i < statusSteps.length; i++) {
        loadingStatusText.textContent = statusSteps[i];
        await sleep(250);
      }

      const tone = toneSelect.value;
      let generatedPost = null;
      let usedAI = false;
      let customNotice = null;

      // 1. Attempt to generate via Express Backend API
      try {
        const response = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topic: rawTopic, tone })
        });

        if (response.ok) {
          const result = await response.json();
          if (result.success && result.post) {
            generatedPost = result.post;
            usedAI = result.isAI;
            customNotice = result.notice;
          }
        }
      } catch (networkErr) {
        console.warn('Backend fetch failed, using client-side fallback:', networkErr);
      }

      // 2. If backend was unreachable or returned empty, use client-side engine
      if (!generatedPost) {
        generatedPost = postGenerator.generate(rawTopic, tone);
      }

      currentPostData = generatedPost;

      // Render into the LinkedIn preview card
      renderPost(currentPostData);

      // Scroll smoothly to preview on mobile devices
      if (window.innerWidth < 1024) {
        linkedinCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }

      // Display appropriate toast feedback
      if (usedAI) {
        showToast('Generated with Google Gemini AI! 🤖✨', 'success');
      } else if (customNotice) {
        showToast(customNotice, 'info');
      } else {
        showToast('Post generated successfully! ✨', 'success');
      }

    } catch (err) {
      console.error('Generation error:', err);
      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      // Restore UI states
      previewSkeleton.classList.add('hidden');
      linkedinCard.classList.remove('hidden');
      btnGenerate.disabled = false;
      btnGenerate.style.opacity = '1';
      isGenerating = false;
    }
  }

  /**
   * Renders the generated post into the LinkedIn card
   */
  function renderPost(post) {
    // Set formatted HTML inside content-editable post body
    postContentText.innerHTML = post.formattedHtml;

    // Update statistics
    updateStats(post.stats);

    // Randomize engagement numbers slightly for realistic feel
    const randomReactions = Math.floor(Math.random() * 400) + 180;
    baseReactions = randomReactions;
    reactionsCountDisplay.textContent = baseReactions.toLocaleString();
    isLiked = false;
    btnLikeAction.classList.remove('active-like');

    // Update author profile preview
    updateAuthorDisplay();
  }

  /**
   * Updates character, word, read time, and hashtag counts
   */
  function updateStats(stats) {
    statCharCount.textContent = stats.charCount.toLocaleString();
    statWordCount.textContent = stats.wordCount.toLocaleString();
    statReadTime.textContent = stats.readTime;
    statHashtagCount.textContent = stats.hashtagCount;
  }

  /**
   * Synchronizes metrics when user edits post directly in the LinkedIn card
   */
  function handleContentEdited() {
    const rawText = postContentText.innerText;
    const hashtagMatches = rawText.match(/#[a-zA-Z0-9_]+/g) || [];
    const stats = postGenerator.calculateStats(rawText, hashtagMatches.length);
    updateStats(stats);
  }

  /**
   * Handles copying the clean post text to clipboard
   */
  async function handleCopyPost() {
    const textToCopy = postContentText.innerText;

    if (!textToCopy || textToCopy.trim().length === 0) {
      showToast('No post content available to copy.', 'warning');
      return;
    }

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        // Fallback for non-HTTPS or older environments
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }

      showToast('Post copied to clipboard! Ready to paste into LinkedIn. 📋', 'success');
    } catch (err) {
      console.error('Clipboard copy failed:', err);
      showToast('Failed to copy. Please select and copy manually.', 'error');
    }
  }

  /**
   * Handles clearing inputs and resetting the preview
   */
  function handleClearAll() {
    topicInput.value = '';
    btnClearInput.classList.add('hidden');
    quickChips.forEach(c => c.classList.remove('active'));

    // Reset preview
    linkedinCard.classList.add('hidden');
    previewSkeleton.classList.add('hidden');
    previewEmptyState.classList.remove('hidden');
    postContentText.innerHTML = '';

    // Reset like state
    isLiked = false;
    btnLikeAction.classList.remove('active-like');

    // Reset stats
    statCharCount.textContent = '0';
    statWordCount.textContent = '0';
    statReadTime.textContent = '0s';
    statHashtagCount.textContent = '0';

    currentPostData = null;
    showToast('Dashboard cleared.', 'info');
  }

  /**
   * Updates the card author metadata from inputs
   */
  function updateAuthorDisplay() {
    const name = authorNameInput.value.trim() || 'Alex Morgan';
    const headline = authorHeadlineInput.value.trim() || 'Founder & Tech Strategist | Building the future of work';

    cardAuthorName.textContent = name;
    cardAuthorHeadline.textContent = headline;

    // Calculate avatar initials (first letters of first and last name)
    const nameParts = name.split(/\s+/).filter(Boolean);
    let initials = 'AM';
    if (nameParts.length >= 2) {
      initials = (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
    } else if (nameParts.length === 1 && nameParts[0].length > 0) {
      initials = nameParts[0].slice(0, 2).toUpperCase();
    }
    cardAvatarInitials.textContent = initials;
  }

  /**
   * Interactive LinkedIn Like action toggle
   */
  function toggleLike() {
    isLiked = !isLiked;
    if (isLiked) {
      btnLikeAction.classList.add('active-like');
      reactionsCountDisplay.textContent = (baseReactions + 1).toLocaleString();
    } else {
      btnLikeAction.classList.remove('active-like');
      reactionsCountDisplay.textContent = baseReactions.toLocaleString();
    }
  }

  /**
   * Displays an accessible, animated toast alert message
   */
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    // Icon based on type
    let icon = 'ℹ️';
    if (type === 'success') icon = '✅';
    if (type === 'warning') icon = '⚠️';
    if (type === 'error') icon = '❌';

    toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
    toastContainer.appendChild(toast);

    // Auto dismiss after 3.2 seconds
    setTimeout(() => {
      toast.classList.add('fade-out');
      setTimeout(() => {
        toast.remove();
      }, 250);
    }, 3200);
  }

  /**
   * Utility helper for async sleep delays
   */
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
});

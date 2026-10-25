/**
 * LinkedIn Post Generator AI - Enhanced Generation Engine (generator.js)
 * Assembles 6 distinct professional components:
 * 1. Strong Opening Hook
 * 2. Engaging Introduction
 * 3. Useful & Meaningful Information (Value)
 * 4. Personal or Professional Insight
 * 5. Clear Call to Action (CTA)
 * 6. 4-6 Relevant Hashtags
 */

class PostGeneratorEngine {
  constructor(templates) {
    this.templates = templates || (typeof POST_TEMPLATES !== 'undefined' ? POST_TEMPLATES : {});
    // Track previous indices to ensure maximum variety across regenerations
    this.history = new Map();
  }

  /**
   * Cleans, sanitizes, and normalizes topic strings.
   * Properly preserves acronyms (AI, UI, UX, API, AWS, etc.) and title cases words.
   */
  formatTopic(rawInput) {
    if (!rawInput || typeof rawInput !== 'string') return 'Career Growth';
    const trimmed = rawInput.trim();
    if (!trimmed) return 'Career Growth';

    const acronyms = ['ai', 'api', 'ui', 'ux', 'seo', 'roi', 'b2b', 'b2c', 'saas', 'devops', 'aws', 'hr', 'pr', 'llm', 'ml'];

    return trimmed
      .split(/\s+/)
      .map(word => {
        const clean = word.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (acronyms.includes(clean)) {
          return clean.toUpperCase();
        }
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }

  /**
   * Smart rotation selector that guarantees a different item is picked on successive calls.
   */
  selectWithVariation(array, historyKey) {
    if (!array || array.length === 0) return '';
    if (array.length === 1) return array[0];

    const lastIndex = this.history.get(historyKey);
    let newIndex;
    let attempts = 0;

    do {
      newIndex = Math.floor(Math.random() * array.length);
      attempts++;
    } while (newIndex === lastIndex && attempts < 15);

    this.history.set(historyKey, newIndex);
    return array[newIndex];
  }

  /**
   * Dynamically constructs 4-6 targeted, high-relevance hashtags.
   */
  generateHashtags(topic, category) {
    const topicTags = [];
    const rawLower = topic.toLowerCase();
    const words = rawLower.split(/\s+/).map(w => w.replace(/[^a-z0-9]/g, '')).filter(Boolean);

    // 1. If specialized category has hashtag sets, select one via rotation
    if (category && this.templates.topicKnowledge && this.templates.topicKnowledge[category]) {
      const sets = this.templates.topicKnowledge[category].hashtags;
      if (sets && sets.length > 0) {
        const chosenSet = this.selectWithVariation(sets, `${category}_hashtags`);
        return chosenSet.slice(0, 5); // 5 tags
      }
    }

    // 2. Otherwise generate from general fallback pools + custom topic tag
    const set = new Set();

    // Add clean PascalCase tag for the topic itself
    const customTag = '#' + words.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('');
    if (customTag.length > 2 && customTag.length < 28) {
      set.add(customTag);
    }

    // Add category-related tags if matching keywords
    const fallbacks = [
      "#ProfessionalGrowth",
      "#Leadership",
      "#ContinuousLearning",
      "#WorkplaceSuccess",
      "#FutureOfWork",
      "#Productivity"
    ];

    for (const tag of fallbacks) {
      if (set.size >= 5) break;
      set.add(tag);
    }

    const result = Array.from(set).slice(0, 5);
    return result;
  }

  /**
   * Core generation method producing the 6 required components.
   */
  generate(topicInput, tone = 'thought-leadership') {
    const topic = this.formatTopic(topicInput);
    const category = this.templates.detectCategory ? this.templates.detectCategory(topic) : null;

    let rawHook = '';
    let rawIntro = '';
    let rawValue = '';
    let rawInsight = '';
    let rawCta = '';
    let hashtagsArray = [];

    // --- Specialized Knowledge Branch (Python, AI, Leadership, WebDev, Career) ---
    if (category && this.templates.topicKnowledge && this.templates.topicKnowledge[category]) {
      const data = this.templates.topicKnowledge[category];
      
      rawHook = this.selectWithVariation(data.hooks, `${category}_hook`);
      rawIntro = this.selectWithVariation(data.intros, `${category}_intro`);
      rawValue = this.selectWithVariation(data.values, `${category}_value`);
      rawInsight = this.selectWithVariation(data.insights, `${category}_insight`);
      rawCta = this.selectWithVariation(data.ctas, `${category}_cta`);
      hashtagsArray = this.generateHashtags(topic, category);
    } 
    // --- Modular Universal Branch (Any Custom Topic) ---
    else {
      const gen = this.templates.generalFrameworks;
      const validTone = (gen.hooks && gen.hooks[tone]) ? tone : 'thought-leadership';

      rawHook = this.selectWithVariation(gen.hooks[validTone], `gen_${validTone}_hook`);
      rawIntro = this.selectWithVariation(gen.intros, `gen_intro`);
      rawValue = this.selectWithVariation(gen.values, `gen_value`);
      rawInsight = this.selectWithVariation(gen.insights, `gen_insight`);
      rawCta = this.selectWithVariation(gen.ctas, `gen_cta`);
      
      const fallbackSets = gen.fallbackHashtags || [];
      if (fallbackSets.length > 0) {
        const pickedSet = this.selectWithVariation(fallbackSets, `gen_hashtags`);
        hashtagsArray = this.generateHashtags(topic, null);
      } else {
        hashtagsArray = this.generateHashtags(topic, null);
      }
    }

    // Token replacement helper
    const replaceTokens = (text) => {
      if (!text) return '';
      return text.replace(/\{topic\}/g, topic);
    };

    // 1. A strong opening hook
    const hook = replaceTokens(rawHook);

    // 2. An engaging introduction
    const intro = replaceTokens(rawIntro);

    // 3. Useful and meaningful information
    const value = replaceTokens(rawValue);

    // 4. A personal or professional insight
    const insight = replaceTokens(rawInsight);

    // 5. A clear call to action
    const cta = replaceTokens(rawCta);

    // 6. 4-6 relevant hashtags
    if (hashtagsArray.length < 4) {
      hashtagsArray.push('#ContinuousLearning', '#ProfessionalGrowth');
    }
    const finalHashtags = hashtagsArray.slice(0, Math.min(6, Math.max(4, hashtagsArray.length)));
    const hashtagsText = finalHashtags.join(' ');

    // Assemble Plain Text (for clipboard)
    const fullPlainText = [hook, intro, value, insight, cta, hashtagsText]
      .filter(Boolean)
      .join('\n\n');

    // Assemble Formatted HTML (for LinkedIn preview card with interactive hashtag pills)
    const htmlHashtags = finalHashtags
      .map(tag => `<span class="hashtag">${this.escapeHtml(tag)}</span>`)
      .join(' ');

    const fullHtml = [
      this.escapeHtml(hook),
      this.escapeHtml(intro),
      this.escapeHtml(value),
      this.escapeHtml(insight),
      this.escapeHtml(cta),
      htmlHashtags
    ]
      .filter(Boolean)
      .join('\n\n');

    // Compute live stats
    const stats = this.calculateStats(fullPlainText, finalHashtags.length);

    return {
      topic,
      tone,
      hook,
      intro,
      value,
      insight,
      cta,
      hashtags: finalHashtags,
      plainText: fullPlainText,
      formattedHtml: fullHtml,
      stats
    };
  }

  /**
   * Computes character count, word count, and reading time.
   */
  calculateStats(text, hashtagCount) {
    const charCount = text.length;
    const words = text.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    // Professional reading speed: ~200 words per minute (~3.3 words per second)
    const readSeconds = Math.max(8, Math.ceil((wordCount / 200) * 60));
    const readTime = readSeconds >= 60 
      ? `${Math.floor(readSeconds / 60)}m ${readSeconds % 60}s` 
      : `${readSeconds}s`;

    return {
      charCount,
      wordCount,
      readTime,
      hashtagCount
    };
  }

  /**
   * Safely escapes HTML special characters.
   */
  escapeHtml(str) {
    if (!str) return '';
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return str.replace(/[&<>"']/g, m => map[m]);
  }
}

// Safely export for browser or Node testing
const defaultTemplates = typeof POST_TEMPLATES !== 'undefined' ? POST_TEMPLATES : null;
const postGenerator = new PostGeneratorEngine(defaultTemplates);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PostGeneratorEngine, postGenerator };
}

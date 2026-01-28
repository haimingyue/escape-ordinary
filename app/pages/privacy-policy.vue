<template>
  <div class="policy-page">
    <AppHeader />

    <main class="policy-main">
      <div class="policy-container">
        <header class="policy-header">
          <p class="policy-label">Privacy Policy</p>
          <h1 class="policy-title">Privacy Policy for Anki Example Collector</h1>
          <p class="policy-updated">Last updated: January 28, 2026</p>
        </header>

        <section class="policy-section">
          <p class="policy-text">
            This Privacy Policy describes how Anki Example Collector ("the Extension", "we", "our") handles data when
            you use the Extension.
          </p>
          <p class="policy-text">
            The Extension is designed to work primarily on your device and to process content only when you explicitly
            interact with it (e.g., selecting text, using the context menu, clicking UI buttons, or using keyboard
            shortcuts). It injects its UI scripts only when you trigger an action.
          </p>
        </section>

        <section class="policy-section">
          <h2 class="policy-heading">Summary</h2>
          <ul class="policy-list">
            <li>We do not sell, rent, or share user data for advertising or tracking.</li>
            <li>We do not run analytics or user profiling.</li>
            <li>The Extension accesses page content only to fulfill actions you request (e.g., capturing a sentence and sending it to Anki).</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2 class="policy-heading">Data We Process</h2>
          <p class="policy-text">Depending on how you use the Extension, we may process:</p>

          <h3 class="policy-subheading">2.1 Web Page Content (User-Triggered)</h3>
          <ul class="policy-list">
            <li>Text you select or highlight</li>
            <li>The sentence or surrounding context near the selected text (for confirmation and capture)</li>
            <li>Page URL and title (as the "source" attached to your Anki note)</li>
          </ul>

          <h3 class="policy-subheading">2.2 Extension Settings and Local State</h3>
          <p class="policy-text">Configuration and preferences stored in Chrome storage, such as:</p>
          <ul class="policy-list">
            <li>Deck / model / field mappings</li>
            <li>Feature options</li>
            <li>API endpoint / API key (if you configure DeepSeek)</li>
          </ul>
          <p class="policy-text">We do not intentionally collect personally identifiable information (PII).</p>
        </section>

        <section class="policy-section">
          <h2 class="policy-heading">How We Use Data</h2>
          <p class="policy-text">We use data strictly to provide Extension functionality, including:</p>
          <ul class="policy-list">
            <li>Showing a confirmation UI for captured sentences</li>
            <li>Adding selected content to Anki note fields (and attaching source URL/title)</li>
            <li>Translating a word or sentence only when you explicitly trigger translation</li>
            <li>Parsing a sentence only when you explicitly trigger parsing</li>
            <li>Storing your settings locally so the Extension works as configured</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2 class="policy-heading">Data Storage</h2>
          <ul class="policy-list">
            <li>The Extension does not store your browsing content on our servers.</li>
            <li>Settings and operational state are stored locally in your browser using Chrome storage (which may sync if your browser sync is enabled).</li>
            <li>Any data you choose to send to Anki is stored according to your local Anki configuration.</li>
            <li>You can remove local Extension data by clearing Extension storage or uninstalling the Extension.</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2 class="policy-heading">Data Sharing and Transmission</h2>

          <h3 class="policy-subheading">5.1 Localhost / AnkiConnect</h3>
          <p class="policy-text">
            The Extension may send user-selected content to a locally running AnkiConnect service (commonly at
            http://127.0.0.1/) only when you request actions such as "append to Anki".
          </p>

          <h3 class="policy-subheading">5.2 DeepSeek API (If Enabled)</h3>
          <p class="policy-text">
            If you configure the DeepSeek API key, user-selected text (e.g., word/sentence and related context) may be
            sent to https://api.deepseek.com/ for translation/meaning/parsing features only when you explicitly trigger
            those actions. Use of DeepSeek is subject to its own privacy policy and terms.
          </p>

          <h3 class="policy-subheading">5.3 Local Dictionary</h3>
          <p class="policy-text">
            The Extension includes a local ECDICT dictionary dataset used for lookups. These lookups are performed
            locally and do not transmit data to third-party servers.
          </p>
        </section>

        <section class="policy-section">
          <h2 class="policy-heading">Permissions We Use and Why</h2>
          <p class="policy-text">The Extension requests the following permissions:</p>
          <ul class="policy-list">
            <li><strong>activeTab</strong>: access the current page only when you interact with the Extension</li>
            <li><strong>scripting</strong>: inject scripts/CSS needed for capture UI and feature operation</li>
            <li><strong>contextMenus</strong>: add right-click actions for capture/translation</li>
            <li><strong>storage</strong>: save Extension settings locally</li>
          </ul>
          <p class="policy-text">Host permissions:</p>
          <ul class="policy-list">
            <li><strong>http://127.0.0.1/*</strong> — communicate with local AnkiConnect when requested</li>
            <li><strong>https://api.deepseek.com/*</strong> — call DeepSeek API when you enable it</li>
          </ul>
          <p class="policy-text">We do not use these permissions for tracking, advertising, or collecting browsing history.</p>
        </section>

        <section class="policy-section">
          <h2 class="policy-heading">Tracking and Advertising</h2>
          <p class="policy-text">The Extension does not:</p>
          <ul class="policy-list">
            <li>track your browsing behavior for advertising</li>
            <li>build user profiles</li>
            <li>sell data</li>
            <li>use third-party analytics SDKs</li>
          </ul>
        </section>

        <section class="policy-section">
          <h2 class="policy-heading">Children's Privacy</h2>
          <p class="policy-text">
            The Extension is not directed to children under 13, and we do not knowingly collect personal information
            from children.
          </p>
        </section>

        <section class="policy-section">
          <h2 class="policy-heading">Changes to This Policy</h2>
          <p class="policy-text">
            We may update this Privacy Policy from time to time. Updates will be posted with a revised "Last updated"
            date.
          </p>
        </section>

        <section class="policy-section">
          <h2 class="policy-heading">Contact</h2>
          <p class="policy-text">If you have questions about this Privacy Policy, please contact:</p>
          <p class="policy-text">Email: your_email@example.com</p>
        </section>
      </div>
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Privacy Policy - Anki Example Collector'
})
</script>

<style scoped>
.policy-page {
  min-height: 100vh;
  background: #f6f7fb;
  color: #1f2a3a;
}

.policy-main {
  padding: 3.5rem 1.5rem 4.5rem;
}

.policy-container {
  max-width: 960px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 50px rgba(20, 30, 50, 0.08);
  border: 1px solid rgba(15, 23, 42, 0.08);
}

.policy-header {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 2.5rem;
}

.policy-label {
  font-size: 0.85rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  color: #8a98ab;
  font-weight: 600;
}

.policy-title {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: #0f172a;
  margin: 0;
}

.policy-updated {
  font-size: 1rem;
  color: #64748b;
}

.policy-section {
  margin-bottom: 2.25rem;
}

.policy-heading {
  font-size: 1.6rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1rem;
}

.policy-subheading {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1f2937;
  margin: 1.5rem 0 0.75rem;
}

.policy-text {
  font-size: 1rem;
  line-height: 1.75;
  color: #334155;
  margin-bottom: 1rem;
}

.policy-list {
  padding-left: 1.2rem;
  margin: 0 0 1rem;
  display: grid;
  gap: 0.5rem;
  color: #334155;
  line-height: 1.7;
}

.policy-list li strong {
  color: #0f172a;
}

@media (max-width: 768px) {
  .policy-main {
    padding: 2.5rem 1rem 3.5rem;
  }

  .policy-container {
    padding: 2rem 1.5rem;
  }

  .policy-title {
    font-size: 2rem;
  }
}
</style>

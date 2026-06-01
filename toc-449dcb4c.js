// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="index.html">Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="navigate.html"><strong aria-hidden="true">1.</strong> Navigate: Docs · Tutorials · Courses</a></span></li><li class="chapter-item expanded "><li class="part-title">Getting Started</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="getting-started.html"><strong aria-hidden="true">2.</strong> Quick start</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="vscode.html"><strong aria-hidden="true">3.</strong> VS Code</a></span></li><li class="chapter-item expanded "><li class="part-title">Documentation</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/intro.html"><strong aria-hidden="true">4.</strong> Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/getting-started.html"><strong aria-hidden="true">5.</strong> Getting started (full)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/how-sruja-works.html"><strong aria-hidden="true">6.</strong> How Sruja works</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/examples.html"><strong aria-hidden="true">7.</strong> Examples</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/beginner-path.html"><strong aria-hidden="true">8.</strong> Beginner path</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/faq.html"><strong aria-hidden="true">9.</strong> FAQ</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/concepts/overview.html"><strong aria-hidden="true">10.</strong> Concepts</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/concepts/architecture.html"><strong aria-hidden="true">10.1.</strong> Architecture</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/concepts/c4-model.html"><strong aria-hidden="true">10.2.</strong> C4 model</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/concepts/system.html"><strong aria-hidden="true">10.3.</strong> System</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/concepts/container.html"><strong aria-hidden="true">10.4.</strong> Container</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/concepts/component.html"><strong aria-hidden="true">10.5.</strong> Component</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/concepts/person.html"><strong aria-hidden="true">10.6.</strong> Person</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/concepts/relations.html"><strong aria-hidden="true">10.7.</strong> Relations</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/concepts/views.html"><strong aria-hidden="true">10.8.</strong> Views</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/concepts/validation.html"><strong aria-hidden="true">10.9.</strong> Validation</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/concepts/deployment.html"><strong aria-hidden="true">10.10.</strong> Deployment</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/concepts/requirements.html"><strong aria-hidden="true">10.11.</strong> Requirements</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/concepts/scenario.html"><strong aria-hidden="true">10.12.</strong> Scenario</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/concepts/adr.html"><strong aria-hidden="true">10.13.</strong> ADR</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="docs/concepts/policy.html"><strong aria-hidden="true">10.14.</strong> Policy</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/reference/syntax.html"><strong aria-hidden="true">11.</strong> Reference: syntax</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/reference/patterns.html"><strong aria-hidden="true">12.</strong> Reference: patterns</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/reference/cheatsheet.html"><strong aria-hidden="true">13.</strong> Cheatsheet</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/adoption-guide.html"><strong aria-hidden="true">14.</strong> Adoption guide</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/adoption-playbook.html"><strong aria-hidden="true">15.</strong> Adoption playbook</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/using-sruja-in-your-project.html"><strong aria-hidden="true">16.</strong> Using Sruja in your project</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/design-philosophy.html"><strong aria-hidden="true">17.</strong> Design philosophy</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/glossary.html"><strong aria-hidden="true">18.</strong> Glossary</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/style-guide.html"><strong aria-hidden="true">19.</strong> Style guide</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/community.html"><strong aria-hidden="true">20.</strong> Community</a></span></li><li class="chapter-item expanded "><li class="part-title">Courses</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="courses/overview.html"><strong aria-hidden="true">21.</strong> Courses</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/course-overview.html"><strong aria-hidden="true">22.</strong> Systems Thinking 101</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-1-fundamentals/module-overview.html"><strong aria-hidden="true">22.1.</strong> Fundamentals</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-1-fundamentals/lesson-1.html"><strong aria-hidden="true">22.1.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-1-fundamentals/lesson-2.html"><strong aria-hidden="true">22.1.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-1-fundamentals/lesson-3.html"><strong aria-hidden="true">22.1.3.</strong> Lesson 3</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-2-parts-relationships/module-overview.html"><strong aria-hidden="true">22.2.</strong> Parts and Relationships</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-2-parts-relationships/lesson-1.html"><strong aria-hidden="true">22.2.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-2-parts-relationships/lesson-2.html"><strong aria-hidden="true">22.2.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-2-parts-relationships/lesson-3.html"><strong aria-hidden="true">22.2.3.</strong> Lesson 3</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-2-parts-relationships/lesson-4.html"><strong aria-hidden="true">22.2.4.</strong> Lesson 4</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-3-boundaries/module-overview.html"><strong aria-hidden="true">22.3.</strong> Boundaries</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-3-boundaries/lesson-1.html"><strong aria-hidden="true">22.3.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-3-boundaries/lesson-2.html"><strong aria-hidden="true">22.3.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-3-boundaries/lesson-3.html"><strong aria-hidden="true">22.3.3.</strong> Lesson 3</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-4-flows/module-overview.html"><strong aria-hidden="true">22.4.</strong> Flows</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-4-flows/lesson-1.html"><strong aria-hidden="true">22.4.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-4-flows/lesson-2.html"><strong aria-hidden="true">22.4.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-4-flows/lesson-3.html"><strong aria-hidden="true">22.4.3.</strong> Lesson 3</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-5-feedback-loops/module-overview.html"><strong aria-hidden="true">22.5.</strong> Feedback Loops</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-5-feedback-loops/lesson-1.html"><strong aria-hidden="true">22.5.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-5-feedback-loops/lesson-2.html"><strong aria-hidden="true">22.5.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-5-feedback-loops/lesson-3.html"><strong aria-hidden="true">22.5.3.</strong> Lesson 3</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-6-context/module-overview.html"><strong aria-hidden="true">22.6.</strong> Context</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-6-context/lesson-1.html"><strong aria-hidden="true">22.6.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-6-context/lesson-2.html"><strong aria-hidden="true">22.6.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/systems-thinking-101/module-6-context/lesson-3.html"><strong aria-hidden="true">22.6.3.</strong> Lesson 3</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="courses/system-design-101/course-overview.html"><strong aria-hidden="true">23.</strong> System Design 101</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-1-fundamentals/module-overview.html"><strong aria-hidden="true">23.1.</strong> Fundamentals</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-1-fundamentals/lesson-1.html"><strong aria-hidden="true">23.1.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-1-fundamentals/lesson-2.html"><strong aria-hidden="true">23.1.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-1-fundamentals/lesson-3.html"><strong aria-hidden="true">23.1.3.</strong> Lesson 3</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-1-fundamentals/lesson-4.html"><strong aria-hidden="true">23.1.4.</strong> Lesson 4</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-1-fundamentals/lesson-5.html"><strong aria-hidden="true">23.1.5.</strong> Lesson 5</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-2-building-blocks/module-overview.html"><strong aria-hidden="true">23.2.</strong> Building Blocks</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-2-building-blocks/lesson-1.html"><strong aria-hidden="true">23.2.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-2-building-blocks/lesson-2.html"><strong aria-hidden="true">23.2.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-2-building-blocks/lesson-3.html"><strong aria-hidden="true">23.2.3.</strong> Lesson 3</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-3-advanced-modeling/module-overview.html"><strong aria-hidden="true">23.3.</strong> Advanced Modeling</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-3-advanced-modeling/lesson-1.html"><strong aria-hidden="true">23.3.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-3-advanced-modeling/lesson-2.html"><strong aria-hidden="true">23.3.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-3-advanced-modeling/lesson-3.html"><strong aria-hidden="true">23.3.3.</strong> Lesson 3</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-3-advanced-modeling/lesson-4.html"><strong aria-hidden="true">23.3.4.</strong> Lesson 4</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-3-advanced-modeling/lesson-5.html"><strong aria-hidden="true">23.3.5.</strong> Lesson 5</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-3-advanced-modeling/lesson-6.html"><strong aria-hidden="true">23.3.6.</strong> Lesson 6</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-3-advanced-modeling/lesson-7.html"><strong aria-hidden="true">23.3.7.</strong> Lesson 7</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-4-production-readiness/module-overview.html"><strong aria-hidden="true">23.4.</strong> Production Readiness</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-4-production-readiness/lesson-1.html"><strong aria-hidden="true">23.4.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-4-production-readiness/lesson-2.html"><strong aria-hidden="true">23.4.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-4-production-readiness/lesson-3.html"><strong aria-hidden="true">23.4.3.</strong> Lesson 3</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-4-production-readiness/lesson-4.html"><strong aria-hidden="true">23.4.4.</strong> Lesson 4</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-101/module-4-production-readiness/lesson-5.html"><strong aria-hidden="true">23.4.5.</strong> Lesson 5</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="courses/system-design-201/course-overview.html"><strong aria-hidden="true">24.</strong> System Design 201</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-201/module-1-high-throughput/module-overview.html"><strong aria-hidden="true">24.1.</strong> High Throughput</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-201/module-1-high-throughput/lesson-1.html"><strong aria-hidden="true">24.1.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-201/module-1-high-throughput/lesson-2.html"><strong aria-hidden="true">24.1.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-201/module-1-high-throughput/lesson-3.html"><strong aria-hidden="true">24.1.3.</strong> Lesson 3</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-201/module-2-real-time/module-overview.html"><strong aria-hidden="true">24.2.</strong> Real Time</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-201/module-2-real-time/lesson-1.html"><strong aria-hidden="true">24.2.1.</strong> Lesson 1</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-201/module-3-data-intensive/module-overview.html"><strong aria-hidden="true">24.3.</strong> Data Intensive</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-201/module-3-data-intensive/lesson-1.html"><strong aria-hidden="true">24.3.1.</strong> Lesson 1</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-201/module-4-consistency/module-overview.html"><strong aria-hidden="true">24.4.</strong> Consistency</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-201/module-4-consistency/lesson-1.html"><strong aria-hidden="true">24.4.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/system-design-201/module-4-consistency/lesson-2.html"><strong aria-hidden="true">24.4.2.</strong> Lesson 2</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/course-overview.html"><strong aria-hidden="true">25.</strong> Ecommerce Platform</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-1-vision-basics/module-overview.html"><strong aria-hidden="true">25.1.</strong> Vision Basics</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-1-vision-basics/lesson-1.html"><strong aria-hidden="true">25.1.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-1-vision-basics/lesson-2.html"><strong aria-hidden="true">25.1.2.</strong> Lesson 2</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-3-architecture-tech/module-overview.html"><strong aria-hidden="true">25.2.</strong> Architecture Tech</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-3-architecture-tech/lesson-1.html"><strong aria-hidden="true">25.2.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-3-architecture-tech/lesson-2.html"><strong aria-hidden="true">25.2.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-3-architecture-tech/lesson-3.html"><strong aria-hidden="true">25.2.3.</strong> Lesson 3</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-3-architecture-tech/lesson-4.html"><strong aria-hidden="true">25.2.4.</strong> Lesson 4</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-4-sdlc/module-overview.html"><strong aria-hidden="true">25.3.</strong> SDLC</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-4-sdlc/lesson-1.html"><strong aria-hidden="true">25.3.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-4-sdlc/lesson-2.html"><strong aria-hidden="true">25.3.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-4-sdlc/lesson-3.html"><strong aria-hidden="true">25.3.3.</strong> Lesson 3</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-5-ops/module-overview.html"><strong aria-hidden="true">25.4.</strong> Ops</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-5-ops/lesson-1.html"><strong aria-hidden="true">25.4.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-5-ops/lesson-2.html"><strong aria-hidden="true">25.4.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-5-ops/lesson-3.html"><strong aria-hidden="true">25.4.3.</strong> Lesson 3</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-5-ops/lesson-4.html"><strong aria-hidden="true">25.4.4.</strong> Lesson 4</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-6-evolution/module-overview.html"><strong aria-hidden="true">25.5.</strong> Evolution</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-6-evolution/lesson-1.html"><strong aria-hidden="true">25.5.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-6-evolution/lesson-2.html"><strong aria-hidden="true">25.5.2.</strong> Lesson 2</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-7-governance/module-overview.html"><strong aria-hidden="true">25.6.</strong> Governance</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-7-governance/lesson-1.html"><strong aria-hidden="true">25.6.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-7-governance/lesson-2.html"><strong aria-hidden="true">25.6.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/ecommerce-platform/module-7-governance/lesson-3.html"><strong aria-hidden="true">25.6.3.</strong> Lesson 3</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="courses/production-architecture/course-overview.html"><strong aria-hidden="true">26.</strong> Production Architecture</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/production-architecture/module-1-performance/module-overview.html"><strong aria-hidden="true">26.1.</strong> Performance</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/production-architecture/module-1-performance/lesson-1.html"><strong aria-hidden="true">26.1.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/production-architecture/module-1-performance/lesson-2.html"><strong aria-hidden="true">26.1.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/production-architecture/module-1-performance/lesson-3.html"><strong aria-hidden="true">26.1.3.</strong> Lesson 3</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/production-architecture/module-2-modular/module-overview.html"><strong aria-hidden="true">26.2.</strong> Modular</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/production-architecture/module-2-modular/lesson-1.html"><strong aria-hidden="true">26.2.1.</strong> Lesson 1</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/production-architecture/module-3-governance/module-overview.html"><strong aria-hidden="true">26.3.</strong> Governance</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/production-architecture/module-3-governance/lesson-1.html"><strong aria-hidden="true">26.3.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/production-architecture/module-3-governance/lesson-2.html"><strong aria-hidden="true">26.3.2.</strong> Lesson 2</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/production-architecture/module-4-evolution/module-overview.html"><strong aria-hidden="true">26.4.</strong> Evolutionary Architecture</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/production-architecture/module-4-evolution/lesson-1.html"><strong aria-hidden="true">26.4.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/production-architecture/module-4-evolution/lesson-2.html"><strong aria-hidden="true">26.4.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/production-architecture/module-4-evolution/lesson-3.html"><strong aria-hidden="true">26.4.3.</strong> Lesson 3</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/course-overview.html"><strong aria-hidden="true">27.</strong> Agentic AI</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/module-1-fundamentals/module-overview.html"><strong aria-hidden="true">27.1.</strong> Fundamentals</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/module-1-fundamentals/lesson-1.html"><strong aria-hidden="true">27.1.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/module-1-fundamentals/lesson-2.html"><strong aria-hidden="true">27.1.2.</strong> Lesson 2</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/module-2-patterns/module-overview.html"><strong aria-hidden="true">27.2.</strong> Patterns</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/module-2-patterns/lesson-1.html"><strong aria-hidden="true">27.2.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/module-2-patterns/lesson-2.html"><strong aria-hidden="true">27.2.2.</strong> Lesson 2</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/module-3-modeling/module-overview.html"><strong aria-hidden="true">27.3.</strong> Modeling</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/module-3-modeling/lesson-1.html"><strong aria-hidden="true">27.3.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/module-3-modeling/lesson-2.html"><strong aria-hidden="true">27.3.2.</strong> Lesson 2</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/module-4-ai-editor/module-overview.html"><strong aria-hidden="true">27.4.</strong> AI Editor Integration</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/module-4-ai-editor/lesson-1.html"><strong aria-hidden="true">27.4.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/module-4-ai-editor/lesson-2.html"><strong aria-hidden="true">27.4.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/module-4-ai-editor/lesson-3.html"><strong aria-hidden="true">27.4.3.</strong> Lesson 3</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/agentic-ai/module-4-ai-editor/lesson-4-grounded-harness.html"><strong aria-hidden="true">27.4.4.</strong> Lesson 4: Grounded harness</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="courses/advanced-architects/course-overview.html"><strong aria-hidden="true">28.</strong> Advanced Architects</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/advanced-architects/module-1-policy-as-code/module-overview.html"><strong aria-hidden="true">28.1.</strong> Policy As Code</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/advanced-architects/module-1-policy-as-code/lesson-1.html"><strong aria-hidden="true">28.1.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/advanced-architects/module-1-policy-as-code/lesson-2.html"><strong aria-hidden="true">28.1.2.</strong> Lesson 2</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/advanced-architects/module-2-behavioral-modeling/module-overview.html"><strong aria-hidden="true">28.2.</strong> Behavioral Modeling</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/advanced-architects/module-2-behavioral-modeling/lesson-1.html"><strong aria-hidden="true">28.2.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/advanced-architects/module-2-behavioral-modeling/lesson-2.html"><strong aria-hidden="true">28.2.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/advanced-architects/module-2-behavioral-modeling/lesson-3.html"><strong aria-hidden="true">28.2.3.</strong> Lesson 3</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/advanced-architects/module-3-intent-driven/module-overview.html"><strong aria-hidden="true">28.3.</strong> Intent-Driven Development</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/advanced-architects/module-3-intent-driven/lesson-1.html"><strong aria-hidden="true">28.3.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/advanced-architects/module-3-intent-driven/lesson-2.html"><strong aria-hidden="true">28.3.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/advanced-architects/module-3-intent-driven/lesson-3.html"><strong aria-hidden="true">28.3.3.</strong> Lesson 3</a></span></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/course-overview.html"><strong aria-hidden="true">29.</strong> Federated Architecture</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-1-federation-fundamentals/module-overview.html"><strong aria-hidden="true">29.1.</strong> Federation Fundamentals</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-1-federation-fundamentals/lesson-1.html"><strong aria-hidden="true">29.1.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-1-federation-fundamentals/lesson-2.html"><strong aria-hidden="true">29.1.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-1-federation-fundamentals/lesson-3.html"><strong aria-hidden="true">29.1.3.</strong> Lesson 3</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-2-cross-repo-relationships/module-overview.html"><strong aria-hidden="true">29.2.</strong> Cross-Repo Relationships</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-2-cross-repo-relationships/lesson-1.html"><strong aria-hidden="true">29.2.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-2-cross-repo-relationships/lesson-2.html"><strong aria-hidden="true">29.2.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-2-cross-repo-relationships/lesson-3.html"><strong aria-hidden="true">29.2.3.</strong> Lesson 3</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-3-conflict-resolution/module-overview.html"><strong aria-hidden="true">29.3.</strong> Conflict Resolution</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-3-conflict-resolution/lesson-1.html"><strong aria-hidden="true">29.3.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-3-conflict-resolution/lesson-2.html"><strong aria-hidden="true">29.3.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-3-conflict-resolution/lesson-3.html"><strong aria-hidden="true">29.3.3.</strong> Lesson 3</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-4-federated-governance/module-overview.html"><strong aria-hidden="true">29.4.</strong> Federated Governance</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-4-federated-governance/lesson-1.html"><strong aria-hidden="true">29.4.1.</strong> Lesson 1</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-4-federated-governance/lesson-2.html"><strong aria-hidden="true">29.4.2.</strong> Lesson 2</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="courses/federated-architecture/module-4-federated-governance/lesson-3.html"><strong aria-hidden="true">29.4.3.</strong> Lesson 3</a></span></li></ol></li></ol><li class="chapter-item expanded "><li class="part-title">Tutorials</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tutorials/overview.html"><strong aria-hidden="true">30.</strong> Tutorials</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tutorials/basic/cli-basics.html"><strong aria-hidden="true">31.</strong> CLI basics</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tutorials/basic/dsl-basics.html"><strong aria-hidden="true">32.</strong> DSL basics</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tutorials/basic/validation-linting.html"><strong aria-hidden="true">33.</strong> Validation &amp; linting</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tutorials/basic/export-diagrams.html"><strong aria-hidden="true">34.</strong> Export diagrams</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tutorials/basic/systems-thinking.html"><strong aria-hidden="true">35.</strong> Systems thinking</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tutorials/basic/design-mode.html"><strong aria-hidden="true">36.</strong> Design mode</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tutorials/basic/demo-script.html"><strong aria-hidden="true">37.</strong> Demo script</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tutorials/advanced/deployment-modeling.html"><strong aria-hidden="true">38.</strong> Deployment modeling</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tutorials/advanced/cicd-integration.html"><strong aria-hidden="true">39.</strong> CI/CD integration</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tutorials/advanced/agentic-ai-modeling.html"><strong aria-hidden="true">40.</strong> Agentic AI modeling</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="tutorials/advanced/extending-cli-rust.html"><strong aria-hidden="true">41.</strong> Extending the CLI (Rust)</a></span></li><li class="chapter-item expanded "><li class="part-title">Challenges</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="challenges/overview.html"><strong aria-hidden="true">42.</strong> Challenges</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="challenges/add-component.html"><strong aria-hidden="true">43.</strong> Add Component</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="challenges/deployment-architecture.html"><strong aria-hidden="true">44.</strong> Deployment Architecture</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="challenges/external-service.html"><strong aria-hidden="true">45.</strong> External Service</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="challenges/fix-relations.html"><strong aria-hidden="true">46.</strong> Fix Relations</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="challenges/missing-relations.html"><strong aria-hidden="true">47.</strong> Missing Relations</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="challenges/queue-worker.html"><strong aria-hidden="true">48.</strong> Queue Worker</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="challenges/syntax-error.html"><strong aria-hidden="true">49.</strong> Syntax Error</a></span></li><li class="chapter-item expanded "><li class="part-title">Reference</li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/cli.html"><strong aria-hidden="true">50.</strong> CLI</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/language.html"><strong aria-hidden="true">51.</strong> Language</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="reference/language-spec.html"><strong aria-hidden="true">52.</strong> Language specification (full)</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="docs/e2e-show-diagram.html"><strong aria-hidden="true">53.</strong> E2E diagram smoke (CI)</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();


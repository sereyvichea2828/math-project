export default {
  meta: {
    home: 'Home | ITE Boys',
    about: 'About | ITE Boys',
    blogs: 'Blogs | ITE Boys',
    'blog-post': 'Blog Detail | ITE Boys',
    calculate: 'Calculate | ITE Boys',
    'not-found': 'Page Not Found (404) | ITE Boys',
    default: 'ITE Boys - Math Project',
  },
  nav: {
    home: 'Home',
    about: 'About',
    blogs: 'Blogs',
    calculate: 'Calculate',
    admin: 'Admin',
  },
  home: {
    hero: {
      title:
        'Hospital Scheduling <br class="hidden sm:block"/> <span class="bg-linear-to-r from-medical-sky-deep via-cyan-500 to-medical-sky-deep bg-clip-text text-transparent">Management System</span>',
      subtitle: 'Optimizing Healthcare Resources Using Linear Systems and Least Squares.',
      cta: 'Launch Scheduler',
      secondaryCta: 'View The Math',
      features: {
        f1: 'Overdetermined Systems',
        f2: 'Least Squares Optimization',
        f3: 'Real-time Solving',
      },
      tags: {
        vue: 'Vue 3',
        linear: 'Linear Algebra',
        least: 'Least Squares',
      },
    },
    math: {
      tag: 'Three Mathematical Models',
      title: 'The Mathematics of Linear Systems & Least Squares',
      subtitle:
        'Explore the three core mathematical scenarios supported by our solver: <strong>Unique Solution (3×3)</strong>, <strong>Multiple Solutions (Underdetermined 3×5)</strong>, and <strong>Overdetermined Least Squares (4×3)</strong>.',
      tabs: {
        tab1: '1. Unique Solution (3×3)',
        tab2: '2. Multiple Solutions (3×5)',
        tab3: '3. Least Squares (4×3)',
      },
      // Model 1: Unique Solution
      model1Badge: 'Model 1: Square System',
      model1Title: 'Unique Point Solution (3 × 3)',
      model1Desc:
        'When matrix A is square and invertible with full column rank (det(A) = -9 ≠ 0), the column vectors span ℝ³. The system Ax = b has exactly one unique solution x = A⁻¹b with zero residual error (‖e‖ = 0).',
      model1Dim: 'Dimensions',
      model1DimSub: '3 × 3 Square',
      model1DetLabel: 'Determinant',
      model1DetVal: 'det(A) = -9',
      model1DetSub: 'Invertible (Full Rank)',
      model1Status: 'Residual Error',
      model1StatusVal: '‖e‖ = 0',
      model1StatusSub: 'Exact (0% Error)',
      model1SysLabel: 'Linear System Ax = b (3 × 3)',
      model1SysType: 'Exact Solution',
      model1Eq1: '2x₁ + 1x₂ - 1x₃ = 8',
      model1Eq1Label: 'Eq (1)',
      model1Eq2: '-3x₁ - 1x₂ + 2x₃ = -11',
      model1Eq2Label: 'Eq (2)',
      model1Eq3: '-2x₁ + 1x₂ + 2x₃ = -3',
      model1Eq3Label: 'Eq (3)',
      model1SolLabel: 'Exact Result Point',
      model1SolBadge: 'Exact Fit',
      model1SolFormula: 'x = A⁻¹b',
      model1SolVal: '[2, 3, -1]ᵀ',
      model1Sol: 'x = [2, 3, -1]ᵀ',
      model1Action: 'Open Model 1 in Calculator',

      // Model 2: Multiple Solutions
      model2Badge: 'Model 2: Underdetermined System',
      model2Title: 'Infinite Parametric Solutions (3 × 5)',
      model2Desc:
        'When there are more variables than equations (n = 5, m = 3), the system is underdetermined. Gaussian elimination identifies 2 free variables, yielding infinite possible scheduling combinations that offer operational flexibility.',
      model2Dim: 'Dimensions',
      model2DimSub: '3 × 5 Underdetermined',
      model2DetLabel: 'Type',
      model2DetVal: 'Underdetermined',
      model2DetSub: 'Vars > Eqs',
      model2Status: 'Null Space',
      model2StatusVal: 'dim(N) = 2',
      model2StatusSub: '2 Free Variables (s, t ∈ ℝ)',
      model2SysLabel: 'Underdetermined System Ax = b (3 × 5)',
      model2SysType: 'Parametric Vector Form',
      model2Eq1: 'x₁ + x₂ + x₃ + x₄ + x₅ = 60',
      model2Eq1Label: 'Eq (1)',
      model2Eq2: '12x₁ + 4x₂ + 2x₃ + 12x₄ + 4x₅ = 380',
      model2Eq2Label: 'Eq (2)',
      model2Eq3: '5x₁ + 2x₂ + x₃ + 6x₄ + 2x₅ = 170',
      model2Eq3Label: 'Eq (3)',
      model2SolLabel: 'Parametric Vector Form',
      model2SolBadge: 'Multiple Solutions',
      model2SolFormula: 'x(s,t) =',
      model2SolVal: 'xp + s·v₁ + t·v₂',
      model2Sol: 'x = [20, 30, 10, 0, 0]ᵀ + s[0, -5, 4, 1, 0]ᵀ + t[0, -1, 0, 0, 1]ᵀ',
      model2Action: 'Open Model 2 in Calculator',

      // Model 3: Least Squares
      model3Badge: 'Model 3: Overdetermined System',
      model3Title: 'Least Squares Optimization (4 × 3)',
      model3Desc:
        'When there are more equations than variables (m = 4, n = 3), the system is inconsistent (b ∉ Col(A)). We solve the Normal Equation (AᵀA)x̂ = Aᵀb to find the orthogonal projection onto Col(A) with minimal Euclidean error.',
      model3Dim: 'Dimensions',
      model3DimSub: '4 × 3 Overdetermined',
      model3DetLabel: 'Normal Eq',
      model3DetVal: '(AᵀA)x̂ = Aᵀb',
      model3DetSub: 'Orthogonal Proj',
      model3Status: 'Residual Error',
      model3StatusVal: '‖e‖ ≈ 102.4',
      model3StatusSub: '>25% Error',
      model3SysLabel: 'Overdetermined System Ax ≈ b (4 × 3)',
      model3SysType: 'Normal Equation',
      model3Eq1: '1x₁ + 0x₂ + 0x₃ ≈ 10',
      model3Eq1Label: 'Constraint 1',
      model3Eq2: '0x₁ + 1x₂ + 0x₃ ≈ 15',
      model3Eq2Label: 'Constraint 2',
      model3Eq3: '0x₁ + 0x₂ + 1x₃ ≈ 20',
      model3Eq3Label: 'Constraint 3',
      model3Eq4: '1x₁ + 1x₂ + 1x₃ ≈ 150',
      model3Eq4Label: 'Constraint 4',
      model3SolLabel: 'Least Squares Optimal Solution',
      model3SolBadge: 'Orthogonal Projection',
      model3SolFormula: 'x̂ = (AᵀA)⁻¹Aᵀb',
      model3SolVal: '≈ [36.25, 41.25, 46.25]ᵀ',
      model3Sol: 'x̂ = (AᵀA)⁻¹Aᵀb ≈ [36.25, 41.25, 46.25]ᵀ',
      model3Action: 'Open Model 3 in Calculator',

      varInspectorTitle: 'Decision Variables Explorer (x₁, x₂, x₃)',
      varInspectorSubtitle:
        'Select any decision variable to inspect what real-world medical staff and hospital resources it represents:',
      varInspectorTag: 'Vector x = [x₁, x₂, x₃]ᵀ',
      varRateLabel: 'Resource Consumption Rate:',
      varMetricLabel: 'Primary Operational Focus:',
      varTableTitle: 'Resource Matrix Breakdown A',
      varTableConstraint: 'Resource / Constraint',
      varTableRow1: 'Doctor Hours (Row 1)',
      varTableRow2: 'Nurse Hours (Row 2)',
      varTableRow3: 'General Demand (Row 3)',
      varTableRow4: 'Emergency & Device (Row 4)',
      clickCellHint:
        'Click any tab or matrix column header above to switch and inspect the corresponding decision variable.',
      variables: {
        x1: {
          symbol: 'x₁',
          name: 'General Checkup (Doctor)',
          role: 'Primary Care & General Consultations',
          desc: 'Represents the number of outpatient general checkup appointments scheduled. Primarily consumes Doctor consulting hours (0.5 hrs/patient) and baseline nurse triage (0.2 hrs/patient).',
          rate: '0.5 hr Doctor · 0.2 hr Nurse / Patient',
          metric: 'Doctor Consultation Time',
        },
        x2: {
          symbol: 'x₂',
          name: 'Specialist Care (Nurse)',
          role: 'Advanced Diagnosis & Specialized Care',
          desc: 'Represents the number of specialized medical appointments scheduled. Consumes high Doctor time (1.0 hr/patient) and intensive Nurse clinical support (0.5 hrs/patient).',
          rate: '1.0 hr Doctor · 0.5 hr Nurse / Patient',
          metric: 'Specialist & Intensive Nurse Care',
        },
        x3: {
          symbol: 'x₃',
          name: 'Emergency Care (Equipment)',
          role: 'Urgent Care & Medical Device Utilization',
          desc: 'Represents emergency treatments, ICU beds, and specialized medical device utilization requiring round-the-clock facility readiness and high resource availability.',
          rate: '1.0 Unit Operating Suite & Device Care',
          metric: 'Critical Equipment & Staffing',
        },
      },
    },
    // impact: {
    //   tag: 'Real-World Impact',
    //   title: 'Impact Comparison: Before vs After',
    //   subtitle:
    //     'Comparison between manual guesswork scheduling and Least Squares linear optimization.',
    //   traditionalTitle: 'Traditional Method (Manual Guesswork)',
    //   traditionalDesc:
    //     'Scheduling without mathematical modeling leads to resource bottlenecks and high stress.',
    //   traditionalPoint1: 'Doctor overtime exceeds > 35%',
    //   traditionalPoint2: 'Long patient wait times and high cancellation rates',
    //   traditionalPoint3: 'No mathematical guarantee of schedule optimality',
    //   leastTitle: 'Least Squares Method (Optimization)',
    //   leastDesc: 'Solved via Normal Equation to mathematically guarantee the lowest discrepancy.',
    //   leastPoint1: 'Minimizes staff overtime and resource strain to near zero',
    //   leastPoint2: 'Accommodates 90%+ of total patient appointment demand',
    //   leastPoint3: 'Guarantees global minimal Euclidean error ‖b - Ax‖₂',
    // },
    footer: {
      github: 'Source Code',
      team: 'Team Members & Research',
    },
  },
  about: {
    hero: {
      pill: 'About the Project & Research Team',
      title:
        'Bridging Pure Linear Algebra <br class="hidden sm:block"/> with Healthcare Operations',
      subtitle:
        'The Hospital Appointment Scheduling System is an interdisciplinary project created by ITE Boys. We formulate clinical scheduling as an overdetermined linear system and solve it with Least Squares regression in real time.',
      stats: {
        // constraints: 'Linear Constraints',
        // constraintsSub: 'Hospital Resources (m = 4)',
        // variables: 'Decision Variables',
        // variablesSub: 'Schedule Targets (n = 2)',
        runtime: 'Solver Latency',
        runtimeSub: 'Instant Normal Eq (< 1ms)',
        members: 'Team Members',
        membersSub: 'ITE Boys Research Lab',
      },
    },
    pillars: {
      tag: 'Core Pillars',
      title: 'Built on Two Fundamental Principles',
      p1Title: 'Mathematical Precision',
      p1Desc:
        'Transforming impossible overdetermined systems into solvable Normal Equations through orthogonal projection.',
      p2Title: 'Clinical Resource Balance',
      p2Desc:
        'Minimizing staff overtime while maximizing patient consultation capacity across medical departments.',
      //   p3Title: 'Declarative Engineering',
      //   p3Desc:
      //     'Crafted 100% in pure Vue 3 Composition API, reactive state management, and modern responsive design.',
    },
    team: {
      tag: 'The Innovators (10 Members)',
      title: 'Meet the 10 Members of Our Team',
      subtitle:
        'Passionate engineering students combining linear algebra theory with modern interactive software.',
      searchPlaceholder: 'Search members by name, role, or skill...',
      filterAll: 'All (10)',
      filterMath: 'Math & Modeling (4)',
      filterDev: 'Frontend & Architecture (4)',
      filterResearch: 'Clinical & QA (2)',

      m4Name: 'Tuy Sameas',
      m4Role: 'Presentation & Slide Specialist',
      m4Bio:
        'Responsible for structuring presentation layouts, designing visual aids, and ensuring clear communication of project findings.',

      m10Name: 'Try Sereyvichea',
      m10Role: 'UI/UX & Full-Stack System Developer',
      m10Bio:
        'Designs intuitive user experiences (UI/UX) and develops system technologies all the way to efficient, practical code implementation.',

      m21Name: 'Phan Chot Piseth',
      m21Role: 'Graphic & Slide Designer',
      m21Bio:
        'Curates visual assets, designs custom graphics, and crafts clean presentation slides to communicate project workflows effectively.',

      m23Name: 'Pen Samnang',
      m23Role: 'Presentation Content & Slide Coordinator',
      m23Bio:
        'Coordinates presentation content, synthesizes research findings into concise points, and assists in slide deck formatting.',

      m24Name: 'By Chongseng',
      m24Role: 'Slide Design & Layout Specialist',
      m24Bio:
        'Assists in designing presentation slide decks, structuring visual elements, and preparing clean layouts for project delivery.',

      m25Name: 'Bunna David',
      m25Role: 'Slide Flow & Diagram Architect',
      m25Bio:
        'Crafts intuitive flowchart diagrams, presentation transitions, and visual models that translate mathematics into engaging slide visuals.',

      m28Name: 'Bour Sovansela',
      m28Role: 'Slide Review & Formatting Specialist',
      m28Bio:
        'Manages typography, layout consistency, and slide formatting to ensure all presentation materials meet high academic standards.',

      m30Name: 'Ban Bunyan',
      m30Role: 'Report Reviewer & Editor',
      m30Bio:
        'Responsible for reviewing, verifying, and refining project reports to ensure accuracy, structural consistency, and high professional standards.',

      m32Name: 'Barang Pheaktra',
      m32Role: 'Presentation & Slide Designer',
      m32Bio:
        'Specializes in crafting visually compelling and professional presentation slides to communicate project ideas clearly and effectively.',

      m57Name: 'Phatt Sovanheng',
      m57Role: 'Overall Team Lead',
      m57Bio:
        'Experienced in leading cross-functional teams and managing project delivery to achieve key milestones efficiently and on schedule.',
    },
    // roadmap: {
    //   tag: 'Development Journey',
    //   title: 'Research & Engineering Timeline',
    //   step1Title: '1. Theoretical Modeling',
    //   step1Desc:
    //     'Identified hospital capacity bottlenecks and formulated Ax = b system with full column rank.',
    //   step2Title: '2. Normal Equation Derivation',
    //   step2Desc: 'Proved (AᵀA)⁻¹ invertibility and computed closed-form least squares solution.',
    //   step3Title: '3. Pure Vue 3 Simulator',
    //   step3Desc:
    //     'Built real-time interactive parameter sliders, error indicators, and multilingual support.',
    //   step4Title: '4. Optimization Dashboard',
    //   step4Desc:
    //     'Implemented clinical efficiency metrics, utilization gauges, and academic citation cards.',
    // },
    references: {
      tag: 'Academic Bibliography',
      title: 'Academic & Research References',
      subtitle:
        'Foundational guidelines and theoretical notes referenced as the mathematical basis of this project.',
      copiedToast: 'Citation copied to clipboard!',
      copyBtn: 'Copy Citation',
      viewLink: 'View Publication',
      ref1Tag: 'Project Guidelines',
      ref1Title: 'Project Guidelines: Linear Systems & Least Squares Applications',
      ref1Type: 'Academic Project Manual (2026)',
      ref1Source: 'Applied Linear Algebra Course',
      ref1Abstract:
        'Official academic project guidelines defining the overdetermined hospital scheduling matrix model, Normal Equation derivations, and evaluation criteria.',
      ref2Tag: 'Theoretical Foundations',
      ref2Title: 'Theoretical Summary: Linear Equation Systems & Matrices',
      ref2Type: 'Theoretical Lecture Notes',
      ref2Source: 'Department of Information Technology Engineering',
      ref2Abstract:
        'Core principles of matrix algebra, augmented systems, column space range, rank conditions, and properties of inconsistent linear systems.',
      ref3Tag: 'Computational Methods',
      ref3Title:
        'Computational Summary: Gaussian Elimination, Matrix Inversion & Least Squares Approximations',
      ref3Type: 'Computational Methods Reference',
      ref3Source: 'Department of Information Technology Engineering',
      ref3Abstract:
        'Gaussian elimination algorithms, verification of (AᵀA)⁻¹ invertibility, and orthogonal projection derivations for least squares.',
    },
    // faq: {
    //   tag: 'Got Questions?',
    //   title: 'Frequently Asked Questions',
    //   q1: 'Why does hospital scheduling result in an overdetermined system?',
    //   a1: 'Because hospitals have more independent constraints (doctor hours, nurse hours, general checkup demand, specialist demand) than decision variables (number of checkups and specialist slots). This creates m = 4 equations with only n = 2 unknowns.',
    //   q2: 'Why use the Normal Equation instead of standard Gaussian Elimination?',
    //   a2: 'In an overdetermined system where Target Vector b is outside the Column Space of Matrix A, Gaussian elimination yields no exact solution. The Normal Equation AᵀAx = Aᵀb finds the unique vector x that minimizes the squared Euclidean norm of the error.',
    //   q3: 'Is this application built with pure Vue.js?',
    //   a3: 'Yes! The entire project is built exclusively with Vue 3 Composition API (<script setup>), Pinia store for theme/locale persistence, and Tailwind CSS without imperative DOM manipulation.',
    // },
    cta: {
      title: 'Ready to Explore the Live Matrix Solver?',
      subtitle:
        'Test our Least Squares scheduler simulator with your own custom hospital constraints.',
      launchBtn: 'Launch Interactive Simulator',
      homeBtn: 'Back to Home',
    },
  },
  footer: {
    subtitle: 'Math & Design Lab',
    lecturerLabel: 'Lecturer / Advisor',
    lecturerName: 'Lim Seyha',
    quickTools: 'Quick Tools:',
    tools: {
      calculator: 'Calculator',
      geometry: 'Geometry',
      mockups: '3D Mockups',
      formulas: 'Formulas',
    },
    copyright: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
  },
  blogs: {
    header: {
      tag: 'Research & Engineering Blog',
      title: 'Insights from the Intersection of <br class="hidden sm:block"/> Math and Technology',
      subtitle:
        'Deep dives into linear algebra optimization, frontend architecture, and building systems that matter.',
    },
    featured: {
      tag: 'Featured',
      readTime: '12 min read',
      title: 'Solving Overdetermined Systems in Healthcare',
      desc: "Hospital scheduling is notoriously complex. With multiple constraints—doctor availability, nurse shifts, patient demand, and specialist requirements—finding a perfect schedule is often mathematically impossible. Here's how we use linear algebra to find the optimal compromise.",
      h2_1: 'The Core Problem: Ax = b',
      p_1: 'In a typical day, a hospital faces an <strong>overdetermined system</strong>. This means there are more independent constraints (m) than decision variables (n). For example:',
      li_1: '<strong>Constraints (m = 4):</strong> Total doctor hours, total nurse hours, general checkup demand, specialist demand.',
      li_2: '<strong>Variables (n = 2):</strong> Number of general checkups to schedule (x₁), number of specialist appointments (x₂).',
      p_2: 'When you try to solve Ax = b for this scenario, the vector b (target requirements) rarely lies perfectly within the column space of matrix A (resource allocation rates).',
      quote:
        '"You cannot satisfy every constraint perfectly when your resources are pulled in too many incompatible directions. The goal isn\'t perfection; it\'s minimizing the mathematical error."',
      quote_author: '— Try Sereyvichea, Project Lead',
      h2_2: 'Enter Least Squares Regression',
      p_3: 'Instead of giving up when no exact solution exists, we project the target vector b onto the column space of A. We solve the <strong>Normal Equation (AᵀAx = Aᵀb)</strong>:',
      p_4: 'This yields x (Optimal Schedule), the optimal number of appointments that minimizes the Euclidean distance (or <em>residual error</em>) between the desired schedule and what is mathematically possible. By implementing this as a real-time solver, administrators can instantly see the trade-offs of their decisions.',
    },
    comments: {
      title: 'Join the Discussion',
      name: 'Display Name',
      namePlace: 'E.g., Alan Turing',
      email: 'Email (Optional)',
      emailPlace: 'Will not be published',
      comment: 'Your Comment',
      commentPlace: 'Share your perspective on this approach...',
      submit: 'Post Comment',
    },
    latest: {
      title: 'Latest Research',
    },
    sidebar: {
      authorTitle: 'ITE Boys Research',
      authorTag: 'Authors',
      authorDesc:
        'A group of engineering students passionate about applying pure mathematics to solve real-world logistical bottlenecks.',
      meetTeam: 'Meet the Team',
      newsTitle: 'Stay Updated',
      newsDesc:
        'Join our mailing list to receive the latest updates on linear algebra applications in software engineering.',
      emailPlace: "hello{'@'}example.com",
      privacy: 'I agree to receive email updates and accept the privacy policy.',
      subscribe: 'Subscribe Now',
      topics: 'Topics',
      topicsList: {
        math: 'Linear Algebra',
        vue: 'Vue 3 Architecture',
        ui: 'UI/UX Design',
        health: 'Healthcare Systems',
      },
    },
    article: {
      backToBlogs: 'Back to Articles',
      share: 'Share',
      copyLink: 'Copy Link',
      copiedToast: 'Article link copied to clipboard!',
      helpful: 'Was this article helpful?',
      liked: 'Thanks for your feedback!',
      aboutAuthor: 'About the Author',
      viewTeam: 'Meet the Full Team',
      relatedTitle: 'Related Research & Articles',
      readArticle: 'Read Full Article',
      minRead: 'min read',
      publishedOn: 'Published',
      keyInsights: 'Key Mathematical Insights',
      breadcrumbHome: 'Home',
      breadcrumbBlogs: 'Blogs',
      tagRole: 'ITE Boys Researcher',
    },
  },
  calculate: {
    title: 'Matrix Calculator',
    subtitle: 'Dynamic interactive matrix for linear algebra operations.',
    models: 'Special Models',
    model1: 'Unique Solution',
    model2: 'Multiple Solutions',
    model3: 'Least Squares (No Answer)',
    dimensions: 'Dimensions',
    rows: 'Rows (m)',
    cols: 'Columns (n)',
    operations: 'Operations',
    transpose: 'Aᵀ Transpose',
    gaussianElimination: 'Gaussian Elimination (RREF)',
    leastSquares: 'Solve System',
    clear: 'Clear Matrix',
    matrixLabel: 'Matrix',
    vectorB: 'Vector b',
    resultLabel: 'Result',
    resultTypes: {
      transpose: 'Transpose',
      exactSolution: 'Exact Solution (Ax = b)',
      leastSquares: 'Least Squares Solution',
      infiniteSolutions: 'Parametric / General Solution',
      rref: 'Reduced Row Echelon Form (RREF)',
    },
    solutionSteps: 'Solution Steps',
    step: 'Step',
    steps: {
      transposeDesc: 'Transpose operation converts rows into columns and columns into rows.',
      transposeSize: 'The matrix of size {rows}×{cols} becomes {cols}×{rows}.',
      initialMatrix: 'Initial Matrix:\n{matrix}',
      swapRow: 'Swap Row {r1} and Row {r2}:\n{matrix}',
      divideRow: 'Divide Row {r} by {val} to set pivot to 1:\n{matrix}',
      eliminateCol: 'Eliminate column {c} in other rows using Row {r}:\n{matrix}',
      eliminateColBelow: 'Eliminate column {c} below row {r}:\n{matrix}',
      finalRREF: 'Final RREF Matrix:\n{matrix}',
      initialAugmented: 'Initial Augmented Matrix [M | Y]:\n{matrix}',
      backSubstitution: 'Back substitution complete.',
      systemSquare: 'System is square (m=n={m}). Solving exact linear system Ax = b',
      systemUnderdetermined:
        'System is underdetermined (m < n). Infinite solutions with free variables exist.',
      leastSquaresTheory:
        '<div class="bg-medical-teal-light/40 border border-medical-teal/20 p-4 rounded-lg mb-4 text-sm text-slate-700"><strong>Least Squares Formula:</strong><br/>1. Find Transpose <b>Aᵀ</b><br/>2. Form Normal Equation <b>(AᵀA)x = Aᵀb</b><br/>3. Solve for x: <b>x = (AᵀA)⁻¹ Aᵀb</b><br/>4. Calculate Error <b>e = b - Ax</b></div>',
      systemOverdetermined: 'System is overdetermined (m>n). Using Least Squares approximation.',
      normalEq: 'Normal Equation: AᵀAx = Aᵀb',
      computeAt: 'Compute Transpose Aᵀ:\n{matrix}',
      computeAtA: 'Compute AᵀA:\n{matrix}',
      computeAtb: 'Compute Aᵀb:\n{matrix}',
      solvingGauss: 'Solving (AᵀA)x = Aᵀb via Gaussian Elimination...',
      noExactSolutionDetected:
        'No exact solution exists (system is inconsistent). Proceeding with Least Squares...',
      resultX: 'Result: x =\n{matrix}',
      multipleSolutions: 'Infinite Solutions / Free Variables detected!',
      freeVariablesFound: 'Free variables detected: {vars}. Solution expressed in parametric form:',
      parametricSolution: 'Parametric Vector Form:\n{solution}',
      errorVector: 'Error Vector (e = b - Ax):\n{matrix}',
      normError: 'Norm of Error (‖e‖): {norm}',
      percentageError: 'Percentage Error (‖e‖ / ‖b‖): {percent}%',
      errorHighWarning: 'Warning: Error is {percent}% (Above 25% threshold)',
    },
    emptyMatrixWarning: 'Please input numbers into the matrix before calculating!',
    guide: {
      tag: 'Methodology & Flowchart',
      title: 'How It Works: Step-by-Step Mathematical Workflow',
      subtitle:
        'A structured breakdown of our solver pipeline from matrix formulation to parametric & least-squares convergence.',
      step1Title: 'Matrix Formulation & Transposition',
      step1Desc:
        'Define system dimensions (m × n) and vector b. The solver extracts coefficient matrix A and computes transpose Aᵀ.',
      step1Formula: 'A ∈ ℝᵐˣⁿ,  Aᵀ ∈ ℝⁿˣᵐ',
      step2Title: 'Normal Equation & System Check',
      step2Desc:
        'For overdetermined systems (m > n), the system forms the Normal Equation (AᵀA)x̂ = Aᵀb to minimize projection distance ‖b - Ax‖₂.',
      step2Formula: '(AᵀA)x̂ = Aᵀb',
      step3Title: 'Gauss-Jordan & Free Variable Detection',
      step3Desc:
        'Transforms the augmented matrix into Reduced Row Echelon Form (RREF). Automatically separates pivot variables from free parameters (t, s ∈ ℝ).',
      step3Formula: 'x = xₚ + ∑ tᵢ vᵢ',
      step4Title: 'Residual Error & Orthogonality Validation',
      step4Desc:
        'Calculates the residual error vector e = b - Ax̂, Euclidean norm ‖e‖, and percentage variance to assess goodness of fit.',
      step4Formula: 'e = b - Ax̂,  ‖e‖₂ = √(∑ eᵢ²)',
      keyInsightsTitle: 'Key Mathematical Principle',
      keyInsightsText:
        'When columns of A are linearly independent, (AᵀA) is non-singular and strictly invertible, yielding a unique least-squares solution.',
    },
  },
  blogsData: {
    articles: {
      1: {
        title: 'Optimizing Sparse Matrices for Real-Time Execution',
        excerpt:
          'Discover how we reduced our solver latency to under 1ms by exploiting matrix sparsity and avoiding full inversion.',
        content: `
          <h2>The Challenge of Sparsity</h2>
          <p>When dealing with large-scale scheduling systems, the matrices we generate are often incredibly sparse. Meaning, the vast majority of the entries are zero. Traditional algorithms process every single cell, wasting valuable CPU cycles multiplying by zero.</p>
          <p>By leveraging Compressed Sparse Row (CSR) formats, we were able to skip zero-calculations entirely, reducing our solver time from over 300ms to less than 1ms.</p>
          <h3>Implementation Details</h3>
          <p>We switched from standard 2D arrays to specialized sparse data structures. Here's why this matters:</p>
          <ul>
            <li><strong>Memory efficiency:</strong> We only store non-zero values.</li>
            <li><strong>Cache locality:</strong> Values are stored contiguously in memory.</li>
          </ul>
          <blockquote>"Sparsity isn't just about saving space; it's about algorithmic elegance."</blockquote>
          <p>We look forward to open-sourcing our sparse solver library soon!</p>
        `,
        date: 'Aug 18, 2026',
        readTime: '6 min read',
        category: 'Engineering',
        author: 'Try Sereyvichea',
      },
      2: {
        title: 'The Math Behind Our Healthcare Simulator',
        excerpt:
          'A deep dive into the overdetermined systems and why Gaussian elimination fails when constraints exceed variables.',
        content: `
          <h2>Why Gaussian Elimination Fails Us</h2>
          <p>In a perfect world, every scheduling constraint would map perfectly to a variable. But in a hospital, you have dozens of constraints (doctor shifts, patient preferences, room availability) and far fewer decision variables. This is a classic <strong>overdetermined system</strong>.</p>
          <p>If you try to solve an overdetermined system using standard row reduction, you will almost certainly end up with a contradiction, such as <code>0 = 5</code>. The system has no exact solution.</p>
          <h3>The Least Squares Approach</h3>
          <p>Instead of giving up, we ask: <em>What is the closest possible solution?</em></p>
          <p>We use the Normal Equation to project our target vector onto the column space of our constraint matrix. This guarantees mathematically that we are minimizing the squared error of the unmet constraints.</p>
        `,
        date: 'Aug 12, 2026',
        readTime: '8 min read',
        category: 'Mathematics',
        author: 'Phatt Sovanheng',
      },
      3: {
        title: 'Building Declarative UIs with Vue 3',
        excerpt:
          'How we structured our reactive state and component architecture to seamlessly bind with our linear algebra engine.',
        content: `
          <h2>Reactive State for Linear Algebra</h2>
          <p>Building a matrix calculator requires incredibly fast and precise state management. We chose Vue 3 and the Composition API for its raw performance and intuitive reactivity model.</p>
          <h3>Store Architecture</h3>
          <p>By keeping our heavy mathematical calculations inside computed properties, Vue automatically caches the results and only re-evaluates them when the input matrix changes. This prevents the UI from freezing during rapid typing.</p>
          <p>Combined with Tailwind CSS, we were able to build a beautiful, responsive, and blazing-fast interface.</p>
        `,
        date: 'Aug 05, 2026',
        readTime: '5 min read',
        category: 'Frontend',
        author: 'Bunna David',
      },
      featured: {
        title: 'Solving Overdetermined Systems in Healthcare',
        content: `
          <p class="lead">Hospital scheduling is notoriously complex. With multiple constraints—doctor availability, nurse shifts, patient demand, and specialist requirements—finding a perfect schedule is often mathematically impossible. Here's how we use linear algebra to find the optimal compromise.</p>
          <h2>The Core Problem: Ax = b</h2>
          <p>In a typical day, a hospital faces an <strong>overdetermined system</strong>. This means there are more independent constraints (m) than decision variables (n).</p>
          <ul>
            <li><strong>Constraints (m = 4):</strong> Total doctor hours, total nurse hours, general checkup demand, specialist demand.</li>
            <li><strong>Variables (n = 2):</strong> Number of general checkups to schedule (x₁), number of specialist appointments (x₂).</li>
          </ul>
          <p>When you try to solve Ax = b for this scenario, the vector b (target requirements) rarely lies perfectly within the column space of matrix A (resource allocation rates).</p>
          <blockquote>"You cannot satisfy every constraint perfectly when your resources are pulled in too many incompatible directions. The goal isn't perfection; it's minimizing the mathematical error." — Try Sereyvichea, Project Lead</blockquote>
          <h2>Enter Least Squares Regression</h2>
          <p>Instead of giving up when no exact solution exists, we project the target vector b onto the column space of A. We solve the <strong>Normal Equation (AᵀAx = Aᵀb)</strong>.</p>
          <p>This yields x (Optimal Schedule), the optimal number of appointments that minimizes the Euclidean distance (or <em>residual error</em>) between the desired schedule and what is mathematically possible. By implementing this as a real-time solver, administrators can instantly see the trade-offs of their decisions.</p>
        `,
        date: 'Aug 22, 2026',
        readTime: '12 min read',
        category: 'Featured',
        author: 'Try Sereyvichea',
      },
    },
  },
  unauthorized: {
    title: 'Access Denied',
    desc: 'You need to be authenticated to view this page. This demonstrates Vue Router Navigation Guards intercepting the request.',
    homeBtn: 'Go Home',
    loginBtn: 'Mock Login & Enter',
  },
  admin: {
    portal: 'Admin Portal',
    secureArea: 'Secure Area',
    dashboard: 'Dashboard',
    settings: 'Settings',
    logout: 'Log Out',
    dashboardOverview: 'Dashboard Overview',
    dashboardDesc:
      'Welcome to the secure administrative area. You only see this because the navigation guard verified your authentication status.',
    totalCalc: 'Total Calculations',
    activeUsers: 'Active Users',
    status: 'System Status',
    online: 'Online',
    settingsTitle: 'System Settings',
    settingsDesc: 'Manage your portal preferences and mock configurations.',
    twoFactor: 'Two-Factor Authentication',
    twoFactorDesc: 'Require 2FA for all administrative actions.',
    emailNotif: 'Email Notifications',
    emailNotifDesc: 'Receive weekly calculation summaries.',
  },
  notFound: {
    code: '404',
    badge: 'Error 404 • Coordinate Undefined',
    title: 'Page Not Found',
    description:
      'The vector or page you requested does not exist in this coordinate space, or it may have been moved.',
    backToHome: 'Return to Home',
    backPrev: 'Go Back',
    status: 'Matrix State: Inconsistent System (b ∉ Col(A))',
    homeLink: 'Home',
    aboutLink: 'About',
    calculateLink: 'Calculate',
  },
}

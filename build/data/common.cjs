// Shared across every variant, so a typo in the phone number can only happen once.
module.exports = {
  name: "JI CHENG (JESSIE) CHAN",
  contact: "London, UK  |  chan.jicheng@gmail.com  |  +44 (0) 7751 544 790  |  linkedin.com/in/ji-cheng-chan",

  education: {
    heading: "EDUCATION",
    entries: [
      {
        title: "MRes Experimental Psychology with Data Science, University of Manchester",
        dates: "2023 – 2024",
        detail: "High Distinction. Experimental design, causal inference and statistical analysis in R.",
      },
      { title: "BSc (Hons) Psychology, University of Exeter", dates: "2020 – 2023" },
    ],
  },

  // For variants where academic rigour is the thing being bought, the dissertation mark
  // earns its line.
  educationWithMark: {
    heading: "EDUCATION",
    entries: [
      {
        title: "MRes Experimental Psychology with Data Science, University of Manchester",
        dates: "2023 – 2024",
        detail: "High Distinction. Experimental design, causal inference and statistical analysis in R. Research project graded 86/100, highest in the cohort.",
      },
      { title: "BSc (Hons) Psychology, University of Exeter", dates: "2020 – 2023" },
    ],
  },
};

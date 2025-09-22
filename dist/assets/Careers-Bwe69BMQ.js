import {
  c as f,
  r as o,
  j as e,
  o as i,
  U as A,
  A as C,
  H as k,
  s as S,
  C as B,
  t as $,
  p as O,
  v as T,
  q as V,
  P as J,
  X,
} from "./index-vTEF31kV.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G = f("DollarSign", [
  ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
  [
    "path",
    { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _ = f("Filter", [
  [
    "polygon",
    { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3", key: "1yg77f" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P = f("Search", [
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
  ]),
  z = "918884801005",
  Q = () => {
    const [x, H] = o.useState(""),
      [h, q] = o.useState("All"),
      [u, L] = o.useState("All"),
      [F, j] = o.useState(!1),
      [r, b] = o.useState(null),
      [w, y] = o.useState(!1),
      [a, v] = o.useState({
        name: "",
        email: "",
        phone: "",
        experience: "",
        resumeUrl: "",
        coverLetter: "",
      }),
      [c, m] = o.useState({}),
      N = [
        {
          id: "1",
          title: "Lab Technician",
          department: "Laboratory",
          location: "Bijapur, IN",
          type: "Full-time",
          experience: "1-3 years",
          salary: "₹2,00,000 - ₹3,00,000",
          description:
            "Perform laboratory tests and procedures to assist in the diagnosis and treatment of patients. Maintain lab equipment and ensure quality control.",
          requirements: [
            "Diploma or Bachelor's degree in Medical Laboratory Technology",
            "Experience in clinical laboratory preferred",
            "Attention to detail and accuracy",
            "Knowledge of laboratory safety protocols",
            "Basic computer skills",
          ],
          benefits: [
            "Health insurance",
            "Paid time off",
            "Training and development",
            "Supportive work environment",
            "Employee wellness programs",
          ],
          posted: "2 days ago",
        },
        {
          id: "2",
          title: "OT Technician",
          department: "Nursing",
          location: "Bijapur, IN",
          type: "Full-time",
          experience: "1-2 years",
          salary: "₹1,80,000 - ₹2,50,000",
          description:
            "Assist in operating theatre procedures, prepare and maintain OT equipment, and support surgical teams for smooth operations.",
          requirements: [
            "Diploma in Operation Theatre Technology",
            "Experience in hospital OT preferred",
            "Knowledge of sterilization techniques",
            "Ability to work in a team",
            "Good communication skills",
          ],
          benefits: [
            "Health insurance",
            "On-the-job training",
            "Paid leave",
            "Employee assistance program",
            "Career growth opportunities",
          ],
          posted: "3 days ago",
        },
        {
          id: "3",
          title: "Nurse",
          department: "Nursing",
          location: "Bijapur, IN",
          type: "Full-time",
          experience: "0-5 years",
          salary: "₹1,50,000 - ₹3,00,000",
          description:
            "Provide patient care, administer medications, and assist doctors in various departments. Ensure patient comfort and safety.",
          requirements: [
            "Diploma or Bachelor's degree in Nursing",
            "Valid nursing registration",
            "Compassionate and patient-focused",
            "Ability to work in shifts",
            "Good communication skills",
          ],
          benefits: [
            "Competitive salary",
            "Health insurance",
            "Paid leave",
            "Training and development",
            "Supportive team environment",
          ],
          posted: "1 day ago",
        },
        {
          id: "4",
          title: "Brother",
          department: "Nursing",
          location: "Bijapur, IN",
          type: "Full-time",
          experience: "0-3 years",
          salary: "₹1,50,000 - ₹2,50,000",
          description:
            "Assist nurses and doctors in patient care, help with daily activities, and maintain hygiene and safety standards.",
          requirements: [
            "Relevant certification or experience",
            "Caring and responsible attitude",
            "Ability to work in a team",
            "Willingness to work flexible hours",
            "Basic patient care knowledge",
          ],
          benefits: [
            "Health insurance",
            "Paid time off",
            "Training provided",
            "Friendly work environment",
            "Employee support programs",
          ],
          posted: "4 days ago",
        },
        {
          id: "5",
          title: "Medical Store Staff",
          department: "Pharmacy",
          location: "Bijapur, IN",
          type: "Full-time",
          experience: "0-2 years",
          salary: "₹1,20,000 - ₹2,00,000",
          description:
            "Manage medical store inventory, assist pharmacists, and provide medicines to patients as per prescriptions.",
          requirements: [
            "12th pass or relevant qualification",
            "Experience in medical store preferred",
            "Basic knowledge of medicines",
            "Good organizational skills",
            "Customer service skills",
          ],
          benefits: [
            "Health insurance",
            "Paid leave",
            "On-the-job training",
            "Supportive management",
            "Growth opportunities",
          ],
          posted: "5 days ago",
        },
      ],
      I = [
        {
          icon: k,
          title: "Compassionate Care",
          description:
            "We put patients first and treat everyone with dignity, respect, and empathy.",
        },
        {
          icon: C,
          title: "Excellence",
          description:
            "We strive for the highest standards in everything we do, from patient care to professional development.",
        },
        {
          icon: A,
          title: "Teamwork",
          description:
            "We believe in the power of collaboration and support each other to achieve common goals.",
        },
        {
          icon: S,
          title: "Innovation",
          description:
            "We embrace new technologies and methods to improve patient outcomes and workplace efficiency.",
        },
      ],
      R = [
        "All",
        "Nursing",
        "Laboratory",
        "Rehabilitation",
        "Radiology",
        "Cardiology",
        "Pharmacy",
      ],
      E = ["All", "Full-time", "Part-time", "Contract"],
      g = N.filter((t) => {
        const s =
            t.title.toLowerCase().includes(x.toLowerCase()) ||
            t.department.toLowerCase().includes(x.toLowerCase()),
          l = h === "All" || t.department === h,
          n = u === "All" || t.type === u;
        return s && l && n;
      });
    function M(t) {
      b(t),
        j(!0),
        v({
          name: "",
          email: "",
          phone: "",
          experience: t.experience || "",
          resumeUrl: "",
          coverLetter: "",
        }),
        m({});
    }
    function p() {
      j(!1), b(null), y(!1), m({});
    }
    function d(t) {
      const { name: s, value: l } = t.target;
      v((n) => ({ ...n, [s]: l }));
    }
    function W() {
      const t = {};
      return (
        a.name.trim() || (t.name = "Name is required"),
        a.phone.trim() || (t.phone = "Phone is required"),
        a.email &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email) &&
          (t.email = "Invalid email"),
        t
      );
    }
    async function D() {
      m({});
      const t = W();
      if (Object.keys(t).length > 0) {
        m(t);
        return;
      }
      if (!r) return;
      y(!0);
      const s = [
          "*New Job Application*",
          "",
          `*Job:* ${r.title} (ID: ${r.id})`,
          `*Department:* ${r.department}`,
          `*Location:* ${r.location}`,
          "",
          `*Applicant Name:* ${a.name}`,
          `*Phone:* ${a.phone}`,
          a.email ? `*Email:* ${a.email}` : "",
          a.experience ? `*Experience:* ${a.experience}` : "",
          a.resumeUrl ? `*Resume:* ${a.resumeUrl}` : "",
          (a.coverLetter, ""),
          ...(a.coverLetter ? ["*Cover Letter:*", a.coverLetter] : []),
          "",
          "-- Sent from Al Nabi Careers site",
        ].filter(Boolean).join(`
`),
        l = encodeURIComponent(s),
        U = `https://wa.me/${z.replace(/\D/g, "")}?text=${l}`;
      try {
        window.open(U, "_blank");
        try {
          await navigator.clipboard.writeText(s);
        } catch {}
        p();
      } catch {
        try {
          await navigator.clipboard.writeText(s),
            alert(
              "Could not open WhatsApp automatically. The application text is copied to your clipboard — paste it into WhatsApp to send."
            );
        } catch {
          alert(
            `Failed to open WhatsApp and copy the message. Please copy this message manually:

` + s
          );
        }
        y(!1);
      }
    }
    return e.jsxs("div", {
      className: "min-h-screen bg-gradient-to-b from-gray-50 to-white",
      children: [
        e.jsxs("section", {
          className:
            "relative pt-40 py-20 bg-gradient-to-br from-[#004F74] to-[#007BBA] overflow-hidden",
          children: [
            e.jsx("div", { className: "absolute inset-0 bg-black/10" }),
            e.jsx("div", {
              className:
                "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
              children: e.jsxs(i.div, {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                children: [
                  e.jsx("h1", {
                    className: "text-4xl md:text-6xl font-bold text-white mb-6",
                    children: "Join Our Healthcare Family",
                  }),
                  e.jsx("p", {
                    className:
                      "text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto",
                    children:
                      "Make a difference in people's lives while building a rewarding career at Al Nabi Hospital",
                  }),
                  e.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 text-blue-100",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          e.jsx(A, { className: "h-5 w-5" }),
                          e.jsx("span", { children: "500+ Team Members" }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          e.jsx(C, { className: "h-5 w-5" }),
                          e.jsx("span", {
                            children: "Best Workplace Award 2024",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          e.jsx(k, { className: "h-5 w-5" }),
                          e.jsx("span", { children: "Patient-Centered Care" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        }),
        e.jsx("section", {
          className: "py-20 bg-white",
          children: e.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              e.jsxs(i.div, {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                viewport: { once: !0 },
                className: "text-center mb-16",
                children: [
                  e.jsx("h2", {
                    className:
                      "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                    children: "Our Values & Culture",
                  }),
                  e.jsx("p", {
                    className: "text-lg text-gray-600 max-w-3xl mx-auto",
                    children:
                      "At Al Nabi Hospital, we foster an environment where every team member can thrive, grow, and make a meaningful impact on patient care.",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: I.map((t, s) =>
                  e.jsxs(
                    i.div,
                    {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 0.6, delay: s * 0.1 },
                      viewport: { once: !0 },
                      className:
                        "text-center p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-16 h-16 bg-gradient-to-br from-[#004F74] to-[#007BBA] rounded-2xl flex items-center justify-center mx-auto mb-4",
                          children: e.jsx(t.icon, {
                            className: "h-8 w-8 text-white",
                          }),
                        }),
                        e.jsx("h3", {
                          className: "text-xl font-semibold text-gray-900 mb-2",
                          children: t.title,
                        }),
                        e.jsx("p", {
                          className: "text-gray-600",
                          children: t.description,
                        }),
                      ],
                    },
                    s
                  )
                ),
              }),
            ],
          }),
        }),
        e.jsx("section", {
          className: "py-12 bg-gray-50",
          children: e.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: e.jsxs(i.div, {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              viewport: { once: !0 },
              className: "bg-white rounded-2xl shadow-lg p-6 md:p-8",
              children: [
                e.jsxs("div", {
                  className:
                    "flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6",
                  children: [
                    e.jsxs("div", {
                      className: "relative flex-1 max-w-md",
                      children: [
                        e.jsx(P, {
                          className:
                            "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400",
                        }),
                        e.jsx("input", {
                          type: "text",
                          placeholder: "Search jobs...",
                          value: x,
                          onChange: (t) => H(t.target.value),
                          className:
                            "w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200",
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4",
                      children: [
                        e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsx(_, {
                              className:
                                "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400",
                            }),
                            e.jsx("select", {
                              value: h,
                              onChange: (t) => q(t.target.value),
                              className:
                                "pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white",
                              children: R.map((t) =>
                                e.jsx("option", { value: t, children: t }, t)
                              ),
                            }),
                          ],
                        }),
                        e.jsxs("div", {
                          className: "relative",
                          children: [
                            e.jsx(B, {
                              className:
                                "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400",
                            }),
                            e.jsx("select", {
                              value: u,
                              onChange: (t) => L(t.target.value),
                              className:
                                "pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white",
                              children: E.map((t) =>
                                e.jsx("option", { value: t, children: t }, t)
                              ),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mt-4 text-sm text-gray-600",
                  children: [
                    "Showing ",
                    g.length,
                    " of ",
                    N.length,
                    " positions",
                  ],
                }),
              ],
            }),
          }),
        }),
        e.jsx("section", {
          className: "py-12",
          children: e.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              e.jsx("div", {
                className: "space-y-6",
                children: g.map((t, s) =>
                  e.jsx(
                    i.div,
                    {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 0.6, delay: s * 0.1 },
                      viewport: { once: !0 },
                      className:
                        "bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100",
                      children: e.jsx("div", {
                        className: "p-6 md:p-8",
                        children: e.jsxs("div", {
                          className:
                            "flex flex-col lg:flex-row lg:items-start lg:justify-between",
                          children: [
                            e.jsxs("div", {
                              className: "flex-1",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4",
                                  children: [
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("h3", {
                                          className:
                                            "text-2xl font-bold text-gray-900 mb-2",
                                          children: t.title,
                                        }),
                                        e.jsxs("div", {
                                          className:
                                            "flex flex-wrap items-center gap-4 text-sm text-gray-600",
                                          children: [
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center space-x-1",
                                              children: [
                                                e.jsx(S, {
                                                  className: "h-4 w-4",
                                                }),
                                                e.jsx("span", {
                                                  children: t.department,
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center space-x-1",
                                              children: [
                                                e.jsx($, {
                                                  className: "h-4 w-4",
                                                }),
                                                e.jsx("span", {
                                                  children: t.location,
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center space-x-1",
                                              children: [
                                                e.jsx(B, {
                                                  className: "h-4 w-4",
                                                }),
                                                e.jsx("span", {
                                                  children: t.type,
                                                }),
                                              ],
                                            }),
                                            e.jsxs("div", {
                                              className:
                                                "flex items-center space-x-1",
                                              children: [
                                                e.jsx(G, {
                                                  className: "h-4 w-4",
                                                }),
                                                e.jsx("span", {
                                                  children: t.salary,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    e.jsx("div", {
                                      className: "mt-4 sm:mt-0",
                                      children: e.jsxs("span", {
                                        className:
                                          "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800",
                                        children: [
                                          e.jsx(O, {
                                            className: "h-3 w-3 mr-1",
                                          }),
                                          t.posted,
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                e.jsx("p", {
                                  className:
                                    "text-gray-700 mb-6 leading-relaxed",
                                  children: t.description,
                                }),
                                e.jsxs("div", {
                                  className: "grid md:grid-cols-2 gap-6",
                                  children: [
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("h4", {
                                          className:
                                            "font-semibold text-gray-900 mb-3",
                                          children: "Requirements",
                                        }),
                                        e.jsx("ul", {
                                          className: "space-y-2",
                                          children: t.requirements
                                            .slice(0, 3)
                                            .map((l, n) =>
                                              e.jsxs(
                                                "li",
                                                {
                                                  className:
                                                    "flex items-start space-x-2 text-sm text-gray-600",
                                                  children: [
                                                    e.jsx(T, {
                                                      className:
                                                        "h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0",
                                                    }),
                                                    e.jsx("span", {
                                                      children: l,
                                                    }),
                                                  ],
                                                },
                                                n
                                              )
                                            ),
                                        }),
                                      ],
                                    }),
                                    e.jsxs("div", {
                                      children: [
                                        e.jsx("h4", {
                                          className:
                                            "font-semibold text-gray-900 mb-3",
                                          children: "Benefits",
                                        }),
                                        e.jsx("ul", {
                                          className: "space-y-2",
                                          children: t.benefits
                                            .slice(0, 3)
                                            .map((l, n) =>
                                              e.jsxs(
                                                "li",
                                                {
                                                  className:
                                                    "flex items-start space-x-2 text-sm text-gray-600",
                                                  children: [
                                                    e.jsx(T, {
                                                      className:
                                                        "h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0",
                                                    }),
                                                    e.jsx("span", {
                                                      children: l,
                                                    }),
                                                  ],
                                                },
                                                n
                                              )
                                            ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "mt-6 lg:mt-0 lg:ml-8 flex-shrink-0",
                              children: e.jsx(i.button, {
                                whileHover: { scale: 1.05 },
                                whileTap: { scale: 0.95 },
                                onClick: () => M(t),
                                className:
                                  "w-full lg:w-auto bg-gradient-to-r from-[#156e97] to-[#007BBA] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#004F74] hover:to-[#014060] transition-all duration-300 shadow-lg hover:shadow-xl",
                                children: "Apply Now",
                              }),
                            }),
                          ],
                        }),
                      }),
                    },
                    t.id
                  )
                ),
              }),
              g.length === 0 &&
                e.jsxs(i.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  className: "text-center py-12",
                  children: [
                    e.jsx("div", {
                      className: "text-gray-400 mb-4",
                      children: e.jsx(P, { className: "h-16 w-16 mx-auto" }),
                    }),
                    e.jsx("h3", {
                      className: "text-xl font-semibold text-gray-900 mb-2",
                      children: "No jobs found",
                    }),
                    e.jsx("p", {
                      className: "text-gray-600",
                      children:
                        "Try adjusting your search criteria or check back later for new opportunities.",
                    }),
                  ],
                }),
            ],
          }),
        }),
        e.jsx("section", {
          className: "py-20 bg-gradient-to-b from-gray-50 to-white",
          children: e.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              e.jsxs(i.div, {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                viewport: { once: !0 },
                className: "text-center mb-16",
                children: [
                  e.jsx("h2", {
                    className:
                      "text-3xl md:text-4xl font-bold text-gray-900 mb-4",
                    children: "How to Apply",
                  }),
                  e.jsx("p", {
                    className: "text-lg text-gray-600 max-w-3xl mx-auto",
                    children:
                      "Ready to join our team? Follow these simple steps to start your journey with Al Nabi Hospital.",
                  }),
                ],
              }),
              e.jsx("div", {
                className: "grid md:grid-cols-3 gap-8 mb-16",
                children: [
                  {
                    step: "01",
                    title: "Find Your Role",
                    description:
                      "Browse our current openings and find the position that matches your skills and interests.",
                  },
                  {
                    step: "02",
                    title: "Submit Application",
                    description:
                      "Complete our online application form with your resume and cover letter.",
                  },
                  {
                    step: "03",
                    title: "Interview Process",
                    description:
                      "Participate in our interview process and meet with our hiring team.",
                  },
                ].map((t, s) =>
                  e.jsxs(
                    i.div,
                    {
                      initial: { opacity: 0, y: 30 },
                      whileInView: { opacity: 1, y: 0 },
                      transition: { duration: 0.6, delay: s * 0.2 },
                      viewport: { once: !0 },
                      className: "text-center",
                      children: [
                        e.jsx("div", {
                          className:
                            "w-16 h-16 bg-gradient-to-br from-[#004F74] to-[#007BBA] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl",
                          children: t.step,
                        }),
                        e.jsx("h3", {
                          className: "text-xl font-semibold text-gray-900 mb-2",
                          children: t.title,
                        }),
                        e.jsx("p", {
                          className: "text-gray-600",
                          children: t.description,
                        }),
                      ],
                    },
                    s
                  )
                ),
              }),
              e.jsxs(i.div, {
                initial: { opacity: 0, y: 30 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                viewport: { once: !0 },
                className: "bg-white rounded-2xl shadow-lg p-8 text-center",
                children: [
                  e.jsx("h3", {
                    className: "text-2xl font-bold text-gray-900 mb-4",
                    children: "Questions About Careers?",
                  }),
                  e.jsx("p", {
                    className: "text-gray-600 mb-6",
                    children:
                      "Our HR team is here to help you with any questions about career opportunities at Al Nabi Hospital.",
                  }),
                  e.jsxs("div", {
                    className:
                      "flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center space-x-2 text-gray-700",
                        children: [
                          e.jsx(V, { className: "h-5 w-5 text-primary-500" }),
                          e.jsx("span", {
                            children: "careers@alnabihospital.com",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center space-x-2 text-gray-700",
                        children: [
                          e.jsx(J, { className: "h-5 w-5 text-primary-500" }),
                          e.jsx("span", { children: "+91 4 123 4567" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        F &&
          r &&
          e.jsxs("div", {
            className:
              "fixed inset-0 z-50 flex items-center justify-center px-4",
            children: [
              e.jsx("div", {
                className: "absolute inset-0 bg-black/50",
                onClick: p,
              }),
              e.jsxs(i.div, {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.18 },
                className:
                  "relative z-10 max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-8",
                children: [
                  e.jsx("button", {
                    onClick: p,
                    className:
                      "absolute top-4 right-4 rounded-full p-2 hover:bg-gray-100",
                    "aria-label": "Close",
                    children: e.jsx(X, { className: "h-5 w-5" }),
                  }),
                  e.jsxs("h3", {
                    className: "text-2xl font-bold mb-2",
                    children: ["Apply for: ", r.title],
                  }),
                  e.jsxs("p", {
                    className: "text-sm text-gray-600 mb-6",
                    children: [r.department, " • ", r.location],
                  }),
                  e.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsxs("label", {
                            className: "text-sm font-medium",
                            children: [
                              "Full name",
                              e.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          e.jsx("input", {
                            name: "name",
                            value: a.name,
                            onChange: d,
                            className:
                              "mt-1 w-full border rounded-lg px-3 py-2",
                            placeholder: "Your full name",
                          }),
                          c.name &&
                            e.jsx("div", {
                              className: "text-xs text-red-500 mt-1",
                              children: c.name,
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsxs("label", {
                            className: "text-sm font-medium",
                            children: [
                              "Phone",
                              e.jsx("span", {
                                className: "text-red-500",
                                children: "*",
                              }),
                            ],
                          }),
                          e.jsx("input", {
                            name: "phone",
                            value: a.phone,
                            onChange: d,
                            className:
                              "mt-1 w-full border rounded-lg px-3 py-2",
                            placeholder: "+91 98XXXXXXXX",
                          }),
                          c.phone &&
                            e.jsx("div", {
                              className: "text-xs text-red-500 mt-1",
                              children: c.phone,
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("label", {
                            className: "text-sm font-medium",
                            children: "Email",
                          }),
                          e.jsx("input", {
                            name: "email",
                            value: a.email,
                            onChange: d,
                            className:
                              "mt-1 w-full border rounded-lg px-3 py-2",
                            placeholder: "you@example.com",
                          }),
                          c.email &&
                            e.jsx("div", {
                              className: "text-xs text-red-500 mt-1",
                              children: c.email,
                            }),
                        ],
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("label", {
                            className: "text-sm font-medium",
                            children: "Experience",
                          }),
                          e.jsx("input", {
                            name: "experience",
                            value: a.experience,
                            onChange: d,
                            className:
                              "mt-1 w-full border rounded-lg px-3 py-2",
                            placeholder: "Years / summary",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "md:col-span-2",
                        children: [
                          e.jsx("label", {
                            className: "text-sm font-medium",
                            children:
                              "Resume URL (or Google Drive / Dropbox link)",
                          }),
                          e.jsx("input", {
                            name: "resumeUrl",
                            value: a.resumeUrl,
                            onChange: d,
                            className:
                              "mt-1 w-full border rounded-lg px-3 py-2",
                            placeholder: "https://...",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "md:col-span-2",
                        children: [
                          e.jsx("label", {
                            className: "text-sm font-medium",
                            children: "Cover letter / message",
                          }),
                          e.jsx("textarea", {
                            name: "coverLetter",
                            value: a.coverLetter,
                            onChange: d,
                            className:
                              "mt-1 w-full border rounded-lg px-3 py-2 h-28",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mt-6 flex items-center justify-end space-x-3",
                    children: [
                      e.jsx("button", {
                        onClick: p,
                        className: "px-4 py-2 rounded-lg border",
                        children: "Cancel",
                      }),
                      e.jsx("button", {
                        onClick: D,
                        disabled: w,
                        className:
                          "px-6 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold disabled:opacity-60",
                        children: w ? "Sending..." : "Send to WhatsApp",
                      }),
                    ],
                  }),
                  e.jsxs("p", {
                    className: "text-xs text-gray-500 mt-3",
                    children: [
                      "Note: By clicking Send to WhatsApp the application text will open in WhatsApp Web / Mobile. Make sure the HR WhatsApp number is correctly configured in the code (see ",
                      e.jsx("code", { children: "HR_WHATSAPP_NUMBER" }),
                      ").",
                    ],
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  };
export { Q as default };

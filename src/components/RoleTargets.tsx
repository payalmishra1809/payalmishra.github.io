import React from 'react';

const PRIMARY = ['Business Analyst Intern', 'Data Analyst Intern', 'Product Analyst Intern'];
const SECONDARY = ['Product Management Intern', 'Project Coordinator Intern', 'PMO Intern'];

export const RoleTargets: React.FC = () => (
  <section
    id="roles"
    aria-label="Roles I am targeting"
    className="py-12 sm:py-16 border-t border-zinc-200/80 dark:border-zinc-800/80"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950 dark:text-white pb-1 leading-[1.2]">
        Roles I&apos;m Targeting
      </h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-300 mb-3">
            Primary roles
          </div>
          <div className="flex flex-wrap gap-2.5">
            {PRIMARY.map((r) => (
              <span
                key={r}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/70 dark:border-blue-800/60"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-300 mb-3">
            Also interested in
          </div>
          <div className="flex flex-wrap gap-2.5">
            {SECONDARY.map((r) => (
              <span
                key={r}
                className="px-4 py-2 rounded-full text-sm font-medium bg-white dark:bg-[#0f121d] text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

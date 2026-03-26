import { getWorkExperiences, getProjectExperiences, getAILab, getCoreSkills } from '@/lib/notion';

export const dynamic = 'force-dynamic';
export const revalidate = 60;

export default async function Home() {
  const [workExperiences, projectExperiences, aiLab, coreSkills] = await Promise.all([
    getWorkExperiences(),
    getProjectExperiences(),
    getAILab(),
    getCoreSkills(),
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-4xl mx-auto px-6 py-16">
        
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            朱文颖
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-2">
            产品策略顾问 / AI 应用探索者
          </p>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
            专注从0到1产品孵化，擅长商业模式设计与运营策略落地
          </p>
        </header>

        {/* Core Skills */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 pb-2 border-b-2 border-blue-500">
            Core Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {coreSkills.length > 0 ? (
              coreSkills.map((skill) => (
                <span
                  key={skill.id}
                  className="px-4 py-2 bg-white dark:bg-slate-700 rounded-full text-slate-700 dark:text-slate-200 shadow-sm border border-slate-200 dark:border-slate-600"
                >
                  {skill.name}
                </span>
              ))
            ) : (
              <p className="text-slate-500 dark:text-slate-400 italic">
                暂无技能数据，请在 Notion 中添加
              </p>
            )}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 pb-2 border-b-2 border-blue-500">
            Personal Experience
          </h2>
          <h3 className="text-lg font-semibold text-slate-600 dark:text-slate-400 mb-4">
            工作经历
          </h3>
          <div className="space-y-6">
            {workExperiences.length > 0 ? (
              workExperiences.map((work) => (
                <div
                  key={work.id}
                  className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-slate-800 dark:text-white">
                        {work.title} — {work.company}
                      </h4>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {work.period}
                      </span>
                    </div>
                    {work.link && (
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm mt-2 sm:mt-0"
                      >
                        了解经历 →
                      </a>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {work.description}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-slate-500 dark:text-slate-400 italic">
                暂无工作经历数据，请在 Notion 中添加
              </p>
            )}
          </div>
        </section>

        {/* Project Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 pb-2 border-b-2 border-blue-500">
            Project Experience
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {projectExperiences.length > 0 ? (
              projectExperiences.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                >
                  <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full mb-3">
                    {project.tag}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    >
                      了解详情 →
                    </a>
                  )}
                </div>
              ))
            ) : (
              <p className="text-slate-500 dark:text-slate-400 italic md:col-span-2">
                暂无项目经历数据，请在 Notion 中添加
              </p>
            )}
          </div>
        </section>

        {/* AI Lab */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 pb-2 border-b-2 border-blue-500">
            AI Lab
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            AI 实验室
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {aiLab.length > 0 ? (
              aiLab.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                >
                  {/* 媒体区域 */}
                  {item.mediaUrl && (
                    <div className="w-full aspect-video bg-slate-100 dark:bg-slate-900">
                      {item.mediaType === 'video' ? (
                        <video
                          src={item.mediaUrl}
                          controls
                          className="w-full h-full object-cover"
                          preload="metadata"
                        />
                      ) : (
                        <img
                          src={item.mediaUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full mb-3">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                      {item.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                      >
                        查看详情 →
                      </a>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-slate-500 dark:text-slate-400 italic md:col-span-2">
                暂无 AI Lab 数据，请在 Notion 中添加
              </p>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 dark:text-slate-400 text-sm pt-8 border-t border-slate-200 dark:border-slate-700">
          <p>© 2025 朱文颖. All rights reserved.</p>
          <p className="mt-2">
            内容由 Notion 管理，自动同步更新
          </p>
        </footer>
      </div>
    </main>
  );
}

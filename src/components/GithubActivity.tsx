import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { fadeUpVariant } from '../utils/animations';
import { Github, Star, GitFork, ExternalLink } from 'lucide-react';

interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

interface GithubData {
  repos: Repo[];
  user: {
    public_repos: number;
    followers: number;
    login: string;
    avatar_url: string;
    html_url: string;
  };
  loading: boolean;
  error: string | null;
}

export default function GithubActivity() {
  const [data, setData] = useState<GithubData>({
    repos: [],
    user: null as any,
    loading: true,
    error: null,
  });

  const username = "anasow2"; // User's GitHub username

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        ]);

        if (!userRes.ok || !reposRes.ok) {
          throw new Error('Failed to fetch GitHub data');
        }

        const user = await userRes.json();
        const allRepos = await reposRes.json();
        
        // Sort by stars and forks to simulate "top" repos
        const sortedRepos = allRepos.sort((a: Repo, b: Repo) => 
          (b.stargazers_count + b.forks_count) - (a.stargazers_count + a.forks_count)
        ).slice(0, 4);

        setData({
          repos: sortedRepos,
          user,
          loading: false,
          error: null,
        });
      } catch (err) {
        setData(prev => ({ ...prev, loading: false, error: "Unable to load GitHub activity." }));
      }
    };

    fetchGithubData();
  }, [username]);

  return (
    <section id="github" className="px-6 md:px-12 pb-24 max-w-[1400px] mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className="w-full flex flex-col md:flex-row gap-8"
      >
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div className="bg-white border border-gray-200 shadow-sm rounded-3xl p-8 flex-1 flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <Github className="w-8 h-8 text-[#0a192f]" />
              <h2 className="text-xl font-semibold text-[#0a192f]">GitHub Activity</h2>
            </div>
            
            {data.loading ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-gray-200 border-t-[#10b981] rounded-full animate-spin"></div>
              </div>
            ) : data.error ? (
              <p className="text-sm text-gray-500">{data.error}</p>
            ) : (
              <div className="flex flex-col gap-6">
                <a 
                  href={data.user?.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <img 
                    src={data.user?.avatar_url} 
                    alt={data.user?.login}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 rounded-full border border-gray-200"
                  />
                  <div>
                    <h3 className="font-semibold text-[#0a192f] group-hover:text-[#10b981] transition-colors">@{data.user?.login}</h3>
                    <p className="text-sm text-gray-500">{data.user?.followers} Followers</p>
                  </div>
                </a>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-2xl border border-gray-100 text-center">
                    <p className="text-2xl font-bold text-[#0a192f]">{data.user?.public_repos}</p>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Total Repos</p>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-gray-100 text-center">
                    <p className="text-2xl font-bold text-[#0a192f]">
                      {data.repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
                    </p>
                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-1">Top Stars</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            {data.loading ? (
               Array.from({ length: 4 }).map((_, i) => (
                 <div key={i} className="bg-white border border-gray-200 shadow-sm rounded-3xl p-6 h-full min-h-[160px] animate-pulse"></div>
               ))
            ) : (
              data.repos.map((repo, idx) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-gray-200 shadow-sm hover:bg-[#ebebf0] transition-colors rounded-3xl p-6 flex flex-col justify-between group h-full"
                >
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-[#0a192f] truncate pr-4 group-hover:text-[#10b981] transition-colors">{repo.name}</h3>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#10b981]" />
                    </div>
                    <p className="text-sm text-gray-500 line-clamp-2">{repo.description || "No description provided."}</p>
                  </div>
                  <div className="flex items-center gap-4 mt-6 text-xs font-medium text-gray-500">
                    {repo.language && (
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0a192f]"></span>
                        {repo.language}
                      </div>
                    )}
                    <div className="flex items-center gap-1.5">
                      <Star className="w-3.5 h-3.5" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GitFork className="w-3.5 h-3.5" />
                      {repo.forks_count}
                    </div>
                  </div>
                </motion.a>
              ))
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

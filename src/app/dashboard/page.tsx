'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { 
  BarChart3, Key, Sparkles, Globe, Briefcase, Heart, Crown, Settings,
  Plus, Search, Bell, Eye, CheckCircle, Play, Edit3, Trash2, Upload,
  FileText, ExternalLink, AlertCircle, Info, RefreshCw, Zap
} from 'lucide-react'
import Image from 'next/image'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [currentTime, setCurrentTime] = useState(new Date())
  const [showAddKeywordModal, setShowAddKeywordModal] = useState(false)
  const [showBulkImportModal, setShowBulkImportModal] = useState(false)
  const [showAddSiteModal, setShowAddSiteModal] = useState(false)
  const [selectedKeyword, setSelectedKeyword] = useState('')

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  // Mock data
  const userPlan = {
    name: 'Pro',
    dailyJobsLimit: 7,
    dailyJobsUsed: 3,
    dailyJobsRemaining: 4
  }

  const keywords = [
    {
      id: 1,
      mainKeyword: 'Pinterest Marketing',
      relatedKeywords: ['pinterest tips', 'social media marketing'],
      categoryId: '15',
      site: 'My Blog',
      status: 'active',
      postsGenerated: 12
    },
    {
      id: 2,
      mainKeyword: 'Content Creation',
      relatedKeywords: ['blog writing', 'content strategy'],
      categoryId: '8',
      site: 'Business Blog',
      status: 'active',
      postsGenerated: 8
    }
  ]

  const sites = [
    {
      id: 1,
      name: 'My Blog',
      url: 'https://myblog.com',
      status: 'connected',
      postsPublished: 25,
      lastSync: '2 hours ago',
      username: 'admin'
    },
    {
      id: 2,
      name: 'Business Blog',
      url: 'https://business.com/blog',
      status: 'connected',
      postsPublished: 18,
      lastSync: '1 day ago',
      username: 'editor'
    }
  ]

  const jobs = [
    {
      id: 1,
      keyword: 'Pinterest Marketing',
      site: 'My Blog',
      status: 'running',
      progress: 65,
      startTime: '10 minutes ago',
      estimatedCompletion: '5 minutes'
    },
    {
      id: 2,
      keyword: 'Content Creation',
      site: 'Business Blog',
      status: 'completed',
      progress: 100,
      startTime: '2 hours ago',
      completedTime: '1 hour ago'
    },
    {
      id: 3,
      keyword: 'SEO Tips',
      site: 'My Blog',
      status: 'failed',
      progress: 45,
      startTime: '3 hours ago',
      error: 'WordPress connection timeout'
    }
  ]

  const pinterestData = {
    connected: true,
    accountName: 'John Doe',
    profileImage: '/images/Person (1).png',
    boards: [
      { id: 1, name: 'Marketing Tips', pins: 45, followers: 1200, description: 'Digital marketing strategies and tips' },
      { id: 2, name: 'Blog Content', pins: 32, followers: 890, description: 'Content creation and blogging advice' },
      { id: 3, name: 'SEO Strategies', pins: 28, followers: 650, description: 'Search engine optimization techniques' }
    ],
    totalPins: 105,
    totalImpressions: 45600,
    totalEngagements: 3200,
    monthlyViews: 12500
  }

  const OverviewTab = () => (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-[#B11D34] to-[#8F1729] rounded-3xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
            <p className="text-white/80 text-lg">
              You have {userPlan.dailyJobsRemaining} content generation jobs remaining today
            </p>
          </div>
          <Button 
            className="bg-white text-[#B11D34] hover:bg-white/90 px-6 py-3 rounded-2xl font-semibold"
            onClick={() => setActiveTab('generate')}
          >
            <Plus className="w-5 h-5 mr-2" />
            Generate Content
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Daily Jobs</h3>
              <p className="text-sm text-slate-600">{userPlan.name} Plan</p>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800 mb-2">
            {userPlan.dailyJobsUsed}/{userPlan.dailyJobsLimit}
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
              style={{ width: `${(userPlan.dailyJobsUsed / userPlan.dailyJobsLimit) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Completed Jobs</h3>
              <p className="text-sm text-slate-600">This month</p>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800">98</div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-800">Total Views</h3>
              <p className="text-sm text-slate-600">All content</p>
            </div>
          </div>
          <div className="text-2xl font-bold text-slate-800">1.2M</div>
        </div>
      </div>
    </div>
  )

  const KeywordsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">Keywords Management</h1>
        <div className="flex space-x-3">
          <Button 
            variant="outline" 
            className="border-[#B11D34] text-[#B11D34]"
            onClick={() => setShowBulkImportModal(true)}
          >
            <Upload className="w-4 h-4 mr-2" />
            Bulk Import
          </Button>
          <Button 
            className="bg-[#B11D34] hover:bg-[#8F1729] text-white"
            onClick={() => setShowAddKeywordModal(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Keyword
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-xl font-semibold text-slate-800">Your Keywords</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left p-4 font-semibold text-slate-700">Main Keyword</th>
                <th className="text-left p-4 font-semibold text-slate-700">Related Keywords</th>
                <th className="text-left p-4 font-semibold text-slate-700">Category ID</th>
                <th className="text-left p-4 font-semibold text-slate-700">Site</th>
                <th className="text-left p-4 font-semibold text-slate-700">Posts Generated</th>
                <th className="text-left p-4 font-semibold text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {keywords.map((keyword) => (
                <tr key={keyword.id} className="border-t border-slate-100">
                  <td className="p-4 font-medium text-slate-800">{keyword.mainKeyword}</td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {keyword.relatedKeywords.map((related, index) => (
                        <span key={index} className="bg-slate-100 text-slate-600 px-2 py-1 rounded text-xs">
                          {related}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <code className="bg-slate-100 px-2 py-1 rounded text-sm">{keyword.categoryId}</code>
                  </td>
                  <td className="p-4 text-slate-700">{keyword.site}</td>
                  <td className="p-4 font-medium text-slate-800">{keyword.postsGenerated}</td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-blue-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
          <Info className="w-5 h-5 mr-2" />
          How to Get Category IDs
        </h3>
        <div className="text-blue-700 space-y-2">
          <p>1. Go to your WordPress admin dashboard</p>
          <p>2. Navigate to Posts → Categories</p>
          <p>3. Hover over a category name and look at the URL</p>
          <p>4. The number after "tag_ID=" is your category ID</p>
        </div>
      </div>
    </div>
  )

  const GenerateTab = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Generate Content</h1>
        <p className="text-xl text-slate-600">
          Select a keyword to generate AI-powered content
        </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">
              Select Main Keyword
            </label>
            <select className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B11D34]">
              <option value="">Choose a keyword...</option>
              {keywords.map((keyword) => (
                <option key={keyword.id} value={keyword.mainKeyword}>
                  {keyword.mainKeyword} ({keyword.site})
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Content Type</label>
              <select className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B11D34]">
                <option>Blog Post + Pinterest Pin</option>
                <option>Blog Post Only</option>
                <option>Pinterest Pin Only</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Word Count</label>
              <select className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B11D34]">
                <option>1500-2000 words</option>
                <option>1000-1500 words</option>
                <option>2000-3000 words</option>
              </select>
            </div>
          </div>

          <div className="text-center pt-6">
            <Button className="bg-gradient-to-r from-[#B11D34] to-[#8F1729] hover:from-[#8F1729] hover:to-[#6B0F1F] text-white px-8 py-4 rounded-2xl text-lg font-semibold">
              <Sparkles className="w-5 h-5 mr-2" />
              Generate Content ({userPlan.dailyJobsRemaining} jobs remaining)
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  const SitesTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">Connected Sites</h1>
        <Button 
          className="bg-[#B11D34] hover:bg-[#8F1729] text-white"
          onClick={() => setShowAddSiteModal(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Connect New Site
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sites.map((site) => (
          <div key={site.id} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">{site.name}</h3>
                  <a 
                    href={site.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 hover:text-[#B11D34] flex items-center"
                  >
                    {site.url} <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                {site.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="text-sm text-slate-600">Posts Published</div>
                <div className="text-2xl font-bold text-slate-800">{site.postsPublished}</div>
              </div>
              <div>
                <div className="text-sm text-slate-600">Last Sync</div>
                <div className="text-sm text-slate-700">{site.lastSync}</div>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button size="sm" variant="outline" className="flex-1">
                <RefreshCw className="w-4 h-4 mr-2" />
                Sync Now
              </Button>
              <Button size="sm" variant="outline">
                <Settings className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Connection Instructions */}
      <div className="bg-blue-50 rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
          <Info className="w-5 h-5 mr-2" />
          How to Connect Your WordPress Site
        </h3>
        <div className="text-blue-700 space-y-2">
          <p>1. Go to your WordPress admin → Users → Profile</p>
          <p>2. Scroll down to "Application Passwords" section</p>
          <p>3. Enter "Pin8n" as the application name and click "Add New"</p>
          <p>4. Copy the generated password and use it when connecting your site</p>
          <p>5. Make sure your WordPress site has REST API enabled</p>
        </div>
      </div>
    </div>
  )

  const JobsTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">Content Generation Jobs</h1>
        <Button 
          onClick={() => setActiveTab('generate')}
          className="bg-[#B11D34] hover:bg-[#8F1729] text-white"
        >
          <Plus className="w-4 h-4 mr-2" />
          New Job
        </Button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100">
          <h2 className="text-xl font-semibold text-slate-800">All Jobs</h2>
        </div>

        <div className="divide-y divide-slate-100">
          {jobs.map((job) => (
            <div key={job.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-4 h-4 rounded-full ${
                    job.status === 'running' ? 'bg-blue-500 animate-pulse' :
                    job.status === 'completed' ? 'bg-green-500' : 'bg-red-500'
                  }`}></div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{job.keyword}</h3>
                    <p className="text-slate-600">{job.site}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`font-medium ${
                    job.status === 'running' ? 'text-blue-600' :
                    job.status === 'completed' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </div>
                  <div className="text-sm text-slate-500">
                    Started {job.startTime}
                  </div>
                </div>
              </div>

              {job.status === 'running' && (
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-slate-600 mb-2">
                    <span>Progress</span>
                    <span>{job.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${job.progress}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-slate-500 mt-2">
                    Estimated completion: {job.estimatedCompletion}
                  </div>
                </div>
              )}

              {job.status === 'failed' && (
                <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3">
                  <div className="flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-600" />
                    <span className="text-red-800 text-sm">{job.error}</span>
                  </div>
                </div>
              )}

              {job.status === 'completed' && (
                <div className="mt-4 flex space-x-2">
                  <Button size="sm" variant="outline">
                    <Eye className="w-4 h-4 mr-2" />
                    View Content
                  </Button>
                  <Button size="sm" variant="outline">
                    <FileText className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const PinterestTab = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-slate-800">Pinterest Management</h1>
        {!pinterestData.connected && (
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            <Heart className="w-4 h-4 mr-2" />
            Connect Pinterest
          </Button>
        )}
      </div>

      {pinterestData.connected ? (
        <>
          {/* Pinterest Profile */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
            <div className="flex items-center space-x-4 mb-6">
              <Image 
                src={pinterestData.profileImage} 
                alt="Profile"
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold text-slate-800">{pinterestData.accountName}</h2>
                <p className="text-slate-600">Pinterest Account Connected</p>
              </div>
              <div className="ml-auto">
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>

          {/* Pinterest Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Total Pins</h3>
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-800">{pinterestData.totalPins}</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Impressions</h3>
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-800">{pinterestData.totalImpressions.toLocaleString()}</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Engagements</h3>
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-800">{pinterestData.totalEngagements.toLocaleString()}</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Monthly Views</h3>
                </div>
              </div>
              <div className="text-2xl font-bold text-slate-800">{pinterestData.monthlyViews.toLocaleString()}</div>
            </div>
          </div>

          {/* Boards */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100">
            <div className="p-6 border-b border-slate-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-800">Your Boards</h2>
                <Button className="bg-[#B11D34] hover:bg-[#8F1729] text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Create Board
                </Button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {pinterestData.boards.map((board) => (
                  <div key={board.id} className="border border-slate-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-slate-800">{board.name}</h3>
                      <div className="flex space-x-1">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Edit3 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{board.description}</p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <span className="text-slate-600">Pins:</span>
                        <div className="font-medium">{board.pins}</div>
                      </div>
                      <div>
                        <span className="text-slate-600">Followers:</span>
                        <div className="font-medium">{board.followers}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <Heart className="w-16 h-16 text-slate-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Connect Your Pinterest Account</h2>
          <p className="text-slate-600 mb-6">
            Connect Pinterest to automatically create pins from your generated content
          </p>
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3">
            <Heart className="w-5 h-5 mr-2" />
            Connect Pinterest
          </Button>
        </div>
      )}
    </div>
  )

  const PlanTab = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">Your Plan</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            id: 'basic',
            name: 'Basic',
            price: '$25',
            period: '/month',
            current: userPlan.name === 'Basic',
            features: [
              '5 content generation jobs per day',
              '1 WordPress site connection',
              '1 Pinterest account connection',
              'AI-powered content generation',
              'Pinterest pin creation',
              'Basic analytics',
              'Email support'
            ]
          },
          {
            id: 'pro',
            name: 'Pro',
            price: '$75',
            period: '/month',
            current: userPlan.name === 'Pro',
            features: [
              '7 content generation jobs per day',
              'Unlimited WordPress site connections',
              'Multiple Pinterest account connections',
              'Advanced AI content generation',
              'Custom Pinterest templates',
              'Advanced analytics & insights',
              'Priority support'
            ]
          }
        ].map((plan) => (
          <div key={plan.id} className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${
            plan.current ? 'border-[#B11D34]' : 'border-slate-100'
          }`}>
            {plan.current && (
              <div className="bg-[#B11D34] text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Current Plan
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
              <div className="flex items-baseline justify-center mb-4">
                <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                <span className="text-slate-600 ml-1">{plan.period}</span>
              </div>
            </div>
            
            <div className="space-y-3 mb-6">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#B11D34] mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button 
              className={`w-full ${
                plan.current 
                  ? 'bg-slate-100 text-slate-600 cursor-not-allowed' 
                  : 'bg-[#B11D34] hover:bg-[#8F1729] text-white'
              }`}
              disabled={plan.current}
            >
              {plan.current ? 'Current Plan' : `Upgrade to ${plan.name}`}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )

  const SettingsTab = () => (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-800">Settings</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Account Details */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">Account Details</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
              <input 
                type="text" 
                value="John Doe" 
                className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B11D34]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input 
                type="email" 
                value="john@example.com" 
                className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B11D34]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
              <Button variant="outline" className="w-full">
                Change Password
              </Button>
            </div>
            <Button className="bg-[#B11D34] hover:bg-[#8F1729] text-white w-full">
              Update Account
            </Button>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <div>
                <div className="font-medium text-slate-800">Email Notifications</div>
                <div className="text-sm text-slate-600">Receive email when jobs complete</div>
              </div>
              <input type="checkbox" className="w-4 h-4" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <div>
                <div className="font-medium text-slate-800">Auto-publish to WordPress</div>
                <div className="text-sm text-slate-600">Automatically publish generated content</div>
              </div>
              <input type="checkbox" className="w-4 h-4" defaultChecked />
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
              <div>
                <div className="font-medium text-slate-800">Auto-pin to Pinterest</div>
                <div className="text-sm text-slate-600">Automatically create Pinterest pins</div>
              </div>
              <input type="checkbox" className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* API Settings */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
          <h2 className="text-xl font-semibold text-slate-800 mb-6">API Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">API Key</label>
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  value="pk_live_123...789" 
                  readOnly
                  className="flex-1 p-3 border border-slate-200 rounded-xl bg-slate-50"
                />
                <Button variant="outline">
                  <Eye className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              Regenerate API Key
            </Button>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-200">
          <h2 className="text-xl font-semibold text-red-800 mb-6">Danger Zone</h2>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 rounded-xl">
              <h3 className="font-medium text-red-800 mb-2">Delete Account</h3>
              <p className="text-sm text-red-600 mb-4">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview': return <OverviewTab />
      case 'keywords': return <KeywordsTab />
      case 'generate': return <GenerateTab />
      case 'sites': return <SitesTab />
      case 'jobs': return <JobsTab />
      case 'pinterest': return <PinterestTab />
      case 'plan': return <PlanTab />
      case 'settings': return <SettingsTab />
      default: return <OverviewTab />
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 z-40">
        <div className="p-6">
          <div className="flex items-center space-x-3 mb-8">
            <Image 
              src="/images/pin8n icon.png" 
              alt="Pin8n" 
              width={32} 
              height={32}
              className="w-8 h-8"
            />
            <span className="text-xl font-bold text-slate-800">Pin8n</span>
          </div>

          <nav className="space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: BarChart3 },
              { id: 'keywords', label: 'Keywords', icon: Key },
              { id: 'generate', label: 'Generate Content', icon: Sparkles },
              { id: 'sites', label: 'Sites', icon: Globe },
              { id: 'jobs', label: 'Jobs', icon: Briefcase },
              { id: 'pinterest', label: 'Pinterest', icon: Heart },
              { id: 'plan', label: 'Plan', icon: Crown },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((item) => {
              const IconComponent = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`
                    w-full flex items-center space-x-3 p-3 rounded-xl transition-all duration-200
                    ${activeTab === item.id 
                      ? 'bg-[#B11D34] text-white shadow-lg' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                    }
                  `}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-slate-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#B11D34] to-[#8F1729] flex items-center justify-center text-white font-semibold">
              JD
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-slate-800">John Doe</div>
              <div className="text-xs text-slate-500">{userPlan.name} Plan</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">
                {activeTab === 'overview' ? 'Dashboard' : 
                 activeTab === 'keywords' ? 'Keywords' :
                 activeTab === 'generate' ? 'Generate Content' :
                 activeTab === 'sites' ? 'Sites' :
                 activeTab === 'jobs' ? 'Jobs' :
                 activeTab === 'pinterest' ? 'Pinterest' :
                 activeTab === 'plan' ? 'Plan' :
                 'Settings'}
              </h1>
              <p className="text-slate-600">
                {currentTime.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="relative p-2 text-slate-600 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>
            </div>
          </div>
        </header>

        {/* Tab Content */}
        <div className="p-6">
          {renderTabContent()}
        </div>
      </main>

      {/* Add Keyword Modal */}
      {showAddKeywordModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Add New Keyword</h2>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowAddKeywordModal(false)}
              >
                ×
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Main Keyword</label>
                <input 
                  type="text"
                  placeholder="e.g., Pinterest Marketing"
                  className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B11D34]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Related Keywords</label>
                <textarea 
                  placeholder="Enter related keywords separated by commas (e.g., pinterest tips, social media marketing, pinterest strategy)"
                  className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B11D34] h-24 resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Category ID</label>
                  <input 
                    type="text"
                    placeholder="e.g., 15"
                    className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B11D34]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Target Site</label>
                  <select className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B11D34]">
                    <option value="">Select a site...</option>
                    {sites.map((site) => (
                      <option key={site.id} value={site.name}>{site.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <h4 className="font-medium text-blue-800 mb-2">💡 Tips for Better Keywords</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Choose specific, targeted keywords with good search volume</li>
                  <li>• Add 3-5 related keywords to improve content relevance</li>
                  <li>• Use tools like Google Keyword Planner for research</li>
                </ul>
              </div>

              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowAddKeywordModal(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 bg-[#B11D34] hover:bg-[#8F1729] text-white"
                  onClick={() => setShowAddKeywordModal(false)}
                >
                  Add Keyword
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bulk Import Modal */}
      {showBulkImportModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Bulk Import Keywords</h2>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowBulkImportModal(false)}
              >
                ×
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Upload CSV File</label>
                <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center hover:border-[#B11D34] transition-colors">
                  <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                  <p className="text-slate-600 mb-2">Drag and drop your CSV file here, or click to browse</p>
                  <Button variant="outline">Choose File</Button>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="font-medium text-slate-800 mb-2">CSV Format Requirements</h4>
                <div className="text-sm text-slate-600 space-y-1">
                  <p><strong>Columns:</strong> main_keyword, related_keywords, category_id, site_name</p>
                  <p><strong>Example:</strong></p>
                  <code className="block bg-white p-2 rounded mt-2 text-xs">
                    Pinterest Marketing,"pinterest tips,social media",15,My Blog
                  </code>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowBulkImportModal(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 bg-[#B11D34] hover:bg-[#8F1729] text-white"
                  onClick={() => setShowBulkImportModal(false)}
                >
                  Import Keywords
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Site Modal */}
      {showAddSiteModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-2xl shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Connect WordPress Site</h2>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setShowAddSiteModal(false)}
              >
                ×
              </Button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Site Name</label>
                <input 
                  type="text"
                  placeholder="e.g., My Blog"
                  className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B11D34]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">WordPress URL</label>
                <input 
                  type="url"
                  placeholder="https://yoursite.com"
                  className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B11D34]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
                  <input 
                    type="text"
                    placeholder="WordPress username"
                    className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B11D34]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Application Password</label>
                  <input 
                    type="password"
                    placeholder="xxxx xxxx xxxx xxxx"
                    className="w-full p-4 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B11D34]"
                  />
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-4">
                <h4 className="font-medium text-blue-800 mb-2 flex items-center">
                  <Info className="w-4 h-4 mr-2" />
                  Setup Instructions
                </h4>
                <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
                  <li>Go to your WordPress admin → Users → Profile</li>
                  <li>Scroll to "Application Passwords" section</li>
                  <li>Enter "Pin8n" as application name and click "Add New"</li>
                  <li>Copy the generated password and paste it above</li>
                </ol>
              </div>

              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => setShowAddSiteModal(false)}
                >
                  Cancel
                </Button>
                <Button 
                  className="flex-1 bg-[#B11D34] hover:bg-[#8F1729] text-white"
                  onClick={() => setShowAddSiteModal(false)}
                >
                  Connect Site
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

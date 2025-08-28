'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Crown,
  Zap,
  Globe,
  ExternalLink,
  AlertTriangle,
  Shield,
  Play,
  Heart,
  Link as LinkIcon,
  Eye,
  Settings,
  BarChart3,
  Users,
  MapPin,
  Calendar,
  Key,
  Monitor,
  Palette,
  TrendingUp
} from 'lucide-react'
import Image from 'next/image'

interface OnboardingData {
  selectedPlan: string
  wordpressSite: {
    url: string
    username: string
    applicationPassword: string
  }
  pinterestConnected: boolean
}

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [tourStep, setTourStep] = useState(1)
  const totalSteps = 4

  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    selectedPlan: '',
    wordpressSite: {
      url: '',
      username: '',
      applicationPassword: ''
    },
    pinterestConnected: false
  })

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleComplete = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push('/dashboard')
    }, 2000)
  }

  const updateData = (key: keyof OnboardingData, value: any) => {
    setOnboardingData(prev => ({ ...prev, [key]: value }))
  }

  const updateNestedData = (parentKey: keyof OnboardingData, childKey: string, value: any) => {
    setOnboardingData(prev => ({
      ...prev,
      [parentKey]: {
        ...prev[parentKey] as any,
        [childKey]: value
      }
    }))
  }

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '$25',
      period: '/month',
      description: 'Perfect for individual creators and small blogs',
      features: [
        '5 content generation jobs per day',
        '1 WordPress site connection',
        '1 Pinterest account connection',
        'AI-powered content generation',
        'Pinterest pin creation',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$75',
      period: '/month',
      description: 'Ideal for growing businesses and content teams',
      features: [
        '7 content generation jobs per day',
        'Unlimited WordPress site connections',
        'Multiple Pinterest account connections',
        'Advanced AI content generation',
        'Custom Pinterest templates',
        'Advanced analytics & insights',
        'Priority support'
      ],
      popular: true
    }
  ]

  const dashboardFeatures = [
    {
      title: 'Keywords Management',
      description: 'Add and organize keywords for content generation',
      icon: Key,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Content Generation',
      description: 'AI-powered content creation for your blog and Pinterest',
      icon: Palette,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Sites Management',
      description: 'Connect and manage your WordPress sites',
      icon: Globe,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Jobs Monitoring',
      description: 'Track your content generation jobs in real-time',
      icon: Monitor,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Pinterest Integration',
      description: 'Manage your Pinterest boards and analytics',
      icon: Heart,
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Analytics & Insights',
      description: 'Detailed performance metrics and insights',
      icon: TrendingUp,
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-4xl mx-auto p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/images/pin8n icon.png" 
                alt="Pin8n" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-slate-800">Pin8n Setup</span>
            </div>
            <div className="text-sm text-slate-600">
              Step {currentStep} of {totalSteps}
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#B11D34] to-[#8F1729] h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          
          {/* Step 1: Plan Selection */}
          {currentStep === 1 && (
            <div className="text-center">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">
                  Choose Your Plan
                </h1>
                <p className="text-xl text-slate-600">
                  Select the plan that best fits your content creation needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {plans.map((plan) => (
                  <div
                    key={plan.id}
                    onClick={() => updateData('selectedPlan', plan.id)}
                    className={`
                      relative bg-white rounded-3xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                        onboardingData.selectedPlan === plan.id
                          ? 'border-[#B11D34] ring-4 ring-[#B11D34]/20 scale-105' 
                          : 'border-gray-100 hover:border-[#B11D34]/20'
                      }
                    `}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-[#B11D34] text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                          <Crown className="w-4 h-4 mr-2" />
                          Most Popular
                        </div>
                      </div>
                    )}

                    {onboardingData.selectedPlan === plan.id && (
                      <div className="absolute top-4 right-4">
                        <CheckCircle className="w-6 h-6 text-[#B11D34]" />
                      </div>
                    )}
                    
                    <div className="p-8">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                        <div className="flex items-baseline justify-center mb-2">
                          <span className="text-5xl font-bold text-slate-800">{plan.price}</span>
                          <span className="text-slate-600 ml-1">{plan.period}</span>
                        </div>
                        <p className="text-slate-600">{plan.description}</p>
                      </div>
                      
                      <div className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-[#B11D34] mr-3 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-slate-600 mb-4">All plans include a 14-day free trial</p>
                <p className="text-sm text-slate-500">No credit card required • Cancel anytime</p>
              </div>
            </div>
          )}

          {/* Step 2: WordPress Connection */}
          {currentStep === 2 && (
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">
                  Connect Your WordPress Site
                </h1>
                <p className="text-xl text-slate-600">
                  Connect your WordPress site to start automating content
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/20 mb-8">
                <div className="space-y-6">
                  {/* Site URL */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      WordPress Site URL
                    </label>
                    <input
                      type="url"
                      placeholder="https://yoursite.com"
                      value={onboardingData.wordpressSite.url}
                      onChange={(e) => updateNestedData('wordpressSite', 'url', e.target.value)}
                      className="w-full p-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B11D34] focus:border-transparent"
                    />
                  </div>

                  {/* Username */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      WordPress Username
                    </label>
                    <input
                      type="text"
                      placeholder="Your WordPress username"
                      value={onboardingData.wordpressSite.username}
                      onChange={(e) => updateNestedData('wordpressSite', 'username', e.target.value)}
                      className="w-full p-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B11D34] focus:border-transparent"
                    />
                  </div>

                  {/* Application Password */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Application Password
                    </label>
                    <input
                      type="password"
                      placeholder="xxxx xxxx xxxx xxxx xxxx xxxx"
                      value={onboardingData.wordpressSite.applicationPassword}
                      onChange={(e) => updateNestedData('wordpressSite', 'applicationPassword', e.target.value)}
                      className="w-full p-4 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#B11D34] focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  How to Create Application Passwords
                </h3>
                <ol className="space-y-2 text-blue-700">
                  <li>1. Go to your WordPress admin → Users → Profile</li>
                  <li>2. Scroll down to "Application Passwords" section</li>
                  <li>3. Enter "Pin8n" as the application name</li>
                  <li>4. Click "Add New Application Password"</li>
                  <li>5. Copy the generated password and paste it above</li>
                </ol>
                <a 
                  href="https://wordpress.org/support/article/application-passwords/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View detailed guide <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Warning about conflicting plugins */}
              <div className="bg-amber-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Important: Conflicting Plugins
                </h3>
                <p className="text-amber-700 mb-3">
                  Some security plugins may block API access. If you're using:
                </p>
                <ul className="space-y-1 text-amber-700 mb-4">
                  <li>• <strong>Wordfence:</strong> Whitelist Pin8n IP addresses</li>
                  <li>• <strong>Sucuri:</strong> Allow REST API access</li>
                  <li>• <strong>iThemes Security:</strong> Enable application passwords</li>
                </ul>
                <p className="text-amber-700 text-sm">
                  Contact support if you need help configuring these plugins.
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Dashboard Tour */}
          {currentStep === 3 && (
            <div className="text-center">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">
                  Dashboard Overview
                </h1>
                <p className="text-xl text-slate-600">
                  Let's take a quick tour of your Pin8n dashboard
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {dashboardFeatures.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
                    >
                      <div className={`w-16 h-16 rounded-2xl mb-4 mx-auto flex items-center justify-center bg-gradient-to-r ${feature.color} text-white`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  )
                })}
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Your Workflow Will Be:
                </h3>
                <div className="flex items-center justify-center space-x-4 flex-wrap">
                  <div className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-full">
                    <Key className="w-5 h-5 text-[#B11D34]" />
                    <span className="text-slate-700">Add Keywords</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-400" />
                  <div className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-full">
                    <Palette className="w-5 h-5 text-[#B11D34]" />
                    <span className="text-slate-700">Generate Content</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-400" />
                  <div className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-full">
                    <Monitor className="w-5 h-5 text-[#B11D34]" />
                    <span className="text-slate-700">Monitor Jobs</span>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-400" />
                  <div className="flex items-center space-x-2 bg-slate-50 px-4 py-2 rounded-full">
                    <TrendingUp className="w-5 h-5 text-[#B11D34]" />
                    <span className="text-slate-700">Track Results</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Pinterest Connection */}
          {currentStep === 4 && (
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">
                  Connect Pinterest
                </h1>
                <p className="text-xl text-slate-600">
                  Connect your Pinterest account to automate pin creation
                </p>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-8 border border-white/20 mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Why Connect Pinterest?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-left">
                    <h4 className="font-semibold text-slate-800 mb-2">Automatic Pin Creation</h4>
                    <p className="text-slate-600 text-sm">
                      Automatically create and publish Pinterest pins from your generated content
                    </p>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-slate-800 mb-2">Drive Traffic</h4>
                    <p className="text-slate-600 text-sm">
                      Pinterest drives more traffic than any other social platform
                    </p>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-slate-800 mb-2">Analytics & Insights</h4>
                    <p className="text-slate-600 text-sm">
                      Track pin performance and optimize your Pinterest strategy
                    </p>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-slate-800 mb-2">Board Management</h4>
                    <p className="text-slate-600 text-sm">
                      Organize pins into boards and manage your Pinterest presence
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => updateData('pinterestConnected', true)}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Heart className="w-6 h-6 mr-3" />
                  Connect Pinterest Account
                </Button>

                {onboardingData.pinterestConnected && (
                  <div className="mt-6 flex items-center justify-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">Pinterest Connected Successfully!</span>
                  </div>
                )}
              </div>

              <div className="bg-slate-50 rounded-2xl p-6">
                <p className="text-slate-600 text-sm">
                  <strong>Note:</strong> You can skip this step and connect Pinterest later from your dashboard settings.
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <Button
              onClick={handleBack}
              disabled={currentStep === 1}
              variant="outline"
              className="flex items-center space-x-2 px-8 py-4 rounded-2xl disabled:opacity-50 border-slate-200 hover:border-[#B11D34]"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </Button>

            <div className="flex space-x-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${i + 1 <= currentStep ? 'bg-[#B11D34]' : 'bg-slate-300'}
                  `}
                />
              ))}
            </div>

            <Button
              onClick={handleNext}
              disabled={
                (currentStep === 1 && !onboardingData.selectedPlan) ||
                (currentStep === 2 && (!onboardingData.wordpressSite.url || !onboardingData.wordpressSite.username || !onboardingData.wordpressSite.applicationPassword))
              }
              className="flex items-center space-x-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#B11D34] to-[#8F1729] hover:from-[#8F1729] hover:to-[#6B0F1F] disabled:opacity-50 text-white"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Setting up dashboard...</span>
                </div>
              ) : (
                <>
                  <span>{currentStep === totalSteps ? 'Complete Setup' : 'Next'}</span>
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
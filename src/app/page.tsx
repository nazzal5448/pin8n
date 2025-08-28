'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Globe, BarChart3, Users, Shield, CheckCircle, Star, Heart, ImageIcon, Share2, Crown, Sparkles, TrendingUp } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Pinterest Content",
      description: "Generate stunning Pinterest pins and blog posts with advanced AI technology"
    },
    {
      icon: <ImageIcon className="w-6 h-6" />,
      title: "Visual Content Creation",
      description: "Create eye-catching Pinterest images and graphics automatically"
    },
    {
      icon: <Share2 className="w-6 h-6" />,
      title: "Multi-Platform Publishing",
      description: "Automatically publish to Pinterest and WordPress with one click"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Pinterest Analytics",
      description: "Track pin performance and optimize your Pinterest strategy with detailed insights"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Viral Content Strategy",
      description: "Create content designed to go viral on Pinterest and drive massive traffic"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Trending Topics",
      description: "Stay ahead with AI-powered trending topic suggestions for maximum engagement"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Pinterest Manager",
      company: "Lifestyle Blog",
      content: "Pin8n has transformed our Pinterest strategy. We've increased our monthly views by 500% and our blog traffic by 300%.",
      rating: 5,
      image: "/images/Person (4).png"
    },
    {
      name: "Marcus Rodriguez",
      role: "Content Creator",
      company: "Fashion Brand",
      content: "The AI-generated Pinterest pins are incredibly engaging. Our repin rate has skyrocketed since using Pin8n.",
      rating: 5,
      image: "/images/Person (2).png"
    },
    {
      name: "Emily Watson",
      role: "Digital Marketer",
      company: "E-commerce Store",
      content: "As a solo entrepreneur, Pin8n has been a game-changer. I can focus on strategy while AI handles the content creation.",
      rating: 5,
      image: "/images/Person (3).png"
    }
  ]

  const pricingPlans = [
    {
      name: "Basic",
      price: "$25",
      period: "/month",
      description: "Perfect for individual creators and small blogs",
      features: [
        "1 WordPress site",
        "5 posts per day",
        "3 pins per post",
        "AI-powered content generation",
        "Pinterest pin creation",
        "Basic analytics",
        "Email support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Pro",
      price: "$75",
      period: "/month",
      description: "Ideal for growing businesses and content teams",
      features: [
        "4 WordPress sites",
        "7 posts per day",
        "3 pins per post",
        "Advanced AI content generation",
        "Custom Pinterest templates",
        "Advanced analytics & insights",
        "Priority support"
      ],
      popular: true,
      cta: "Start Free Trial"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image 
                src="/images/pin8n icon.png" 
                alt="Pin8n Icon" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-gray-900">Pin8n</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Reviews</a>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-sm sm:text-base px-3 sm:px-4">Sign In</Button>
              </Link>
              <Link href="/login">
                <Button className="bg-[#B11D34] hover:bg-[#8F1729] text-sm sm:text-base px-3 sm:px-4">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B11D34]/5 via-transparent to-[#B11D34]/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B11D34]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#B11D34]/5 rounded-full blur-3xl"></div>
        
        {/* Hero Background Images - Blurred */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Pinterest Dashboard Mockup - Blurred Background */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-40 blur-md">
            <div className="relative bg-white/40 rounded-3xl shadow-2xl p-8 border border-white/30 backdrop-blur-sm">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-500/70 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500/70 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500/70 rounded-full"></div>
                <div className="ml-4 text-sm text-gray-700/80">Pin8n Dashboard</div>
              </div>
              
              {/* Pinterest Grid Layout */}
              <div className="grid grid-cols-3 gap-4">
                {/* Pinterest Pin 1 */}
                <div className="bg-gradient-to-br from-pink-200/60 to-red-200/60 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                  <div className="w-full h-24 bg-gradient-to-br from-pink-300/70 to-red-300/70 rounded-xl mb-3"></div>
                  <div className="h-3 bg-white/70 rounded w-3/4 mb-2"></div>
                  <div className="h-2 bg-white/50 rounded w-1/2"></div>
                </div>
                
                {/* Pinterest Pin 2 */}
                <div className="bg-gradient-to-br from-blue-200/60 to-purple-200/60 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                  <div className="w-full h-24 bg-gradient-to-br from-blue-300/70 to-purple-300/70 rounded-xl mb-3"></div>
                  <div className="h-3 bg-white/70 rounded w-2/3 mb-2"></div>
                  <div className="h-2 bg-white/50 rounded w-1/2"></div>
                </div>
                
                {/* Pinterest Pin 3 */}
                <div className="bg-gradient-to-br from-green-200/60 to-teal-200/60 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                  <div className="w-full h-24 bg-gradient-to-br from-green-300/70 to-teal-300/70 rounded-xl mb-3"></div>
                  <div className="h-3 bg-white/70 rounded w-4/5 mb-2"></div>
                  <div className="h-2 bg-white/50 rounded w-2/3"></div>
                </div>
                
                {/* Pinterest Pin 4 */}
                <div className="bg-gradient-to-br from-orange-200/60 to-yellow-200/60 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                  <div className="w-full h-24 bg-gradient-to-br from-orange-300/70 to-yellow-300/70 rounded-xl mb-3"></div>
                  <div className="h-3 bg-white/70 rounded w-3/4 mb-2"></div>
                  <div className="h-2 bg-white/50 rounded w-1/2"></div>
                </div>
                
                {/* Pinterest Pin 5 */}
                <div className="bg-gradient-to-br from-indigo-200/60 to-blue-200/60 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                  <div className="w-full h-24 bg-gradient-to-br from-indigo-300/70 to-blue-300/70 rounded-xl mb-3"></div>
                  <div className="h-3 bg-white/70 rounded w-2/3 mb-2"></div>
                  <div className="h-2 bg-white/50 rounded w-1/2"></div>
                </div>
                
                {/* Pinterest Pin 6 */}
                <div className="bg-gradient-to-br from-red-200/60 to-pink-200/60 rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                  <div className="w-full h-24 bg-gradient-to-br from-red-300/70 to-pink-300/70 rounded-xl mb-3"></div>
                  <div className="h-3 bg-white/70 rounded w-4/5 mb-2"></div>
                  <div className="h-2 bg-white/50 rounded w-2/3"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Panel - Blurred Background */}
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[400px] opacity-50 blur-sm">
            <div className="bg-white/50 rounded-3xl shadow-2xl p-6 border border-white/40 backdrop-blur-sm h-full">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-500/80 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500/80 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500/80 rounded-full"></div>
              </div>
              
              <div className="space-y-6">
                {/* Pinterest Performance */}
                <div className="bg-gradient-to-r from-[#B11D34]/30 to-[#B11D34]/20 rounded-2xl p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-800">Pinterest Views</span>
                  </div>
                  <div className="text-2xl font-bold text-[#B11D34] mb-1">+247%</div>
                  <div className="text-xs text-gray-600">vs last month</div>
                </div>
                
                {/* Blog Traffic */}
                <div className="bg-gradient-to-r from-green-200/40 to-green-100/30 rounded-2xl p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-800">Blog Traffic</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600 mb-1">+156%</div>
                  <div className="text-xs text-gray-600">visitors growth</div>
                </div>
                
                {/* Content Generated */}
                <div className="bg-gradient-to-r from-blue-200/40 to-blue-100/30 rounded-2xl p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-800">Content Created</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-1">1,247</div>
                  <div className="text-xs text-gray-600">pins this month</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements - Blurred Background */}
          <div className="absolute top-1/3 left-1/4 w-[200px] h-[100px] opacity-60 blur-sm">
            <div className="bg-white/60 rounded-2xl shadow-xl p-5 border border-white/40 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#B11D34]/80 rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-white/80 rounded"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Content Ready</div>
                  <div className="text-xs text-gray-600">AI Generated</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-1/3 right-1/3 w-[200px] h-[100px] opacity-60 blur-sm">
            <div className="bg-white/60 rounded-2xl shadow-xl p-5 border border-white/40 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500/80 rounded-xl flex items-center justify-center">
                  <div className="w-4 h-4 bg-white/80 rounded"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-800">Auto-Published</div>
                  <div className="text-xs text-gray-600">To Pinterest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[#B11D34]/10 text-[#B11D34] rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-sm">
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
              Pinterest-First Content Automation
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Dominate
              <span className="text-[#B11D34]"> Pinterest</span>
              <br />
              With AI
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
              Create viral Pinterest content and blog posts with AI, then automatically publish to Pinterest and WordPress. 
              Drive massive traffic and grow your audience with Pinterest-first automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/login">
                <Button size="lg" className="bg-[#B11D34] hover:bg-[#8F1729] text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-sm">
                  Start Creating
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 backdrop-blur-sm">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">50K+</div>
              <div className="text-sm sm:text-base text-gray-600">Pinterest Views</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">10K+</div>
              <div className="text-sm sm:text-base text-gray-600">Pins Created</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">300%</div>
              <div className="text-sm sm:text-base text-gray-600">Traffic Increase</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">4.9/5</div>
              <div className="text-sm sm:text-base text-gray-600">User Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Everything you need to dominate Pinterest
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              From AI-powered pin creation to viral content strategy, 
              Pin8n provides all the tools you need to grow your Pinterest presence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-[#B11D34]/20 hover:shadow-lg transition-all duration-300 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#B11D34] rounded-xl flex items-center justify-center text-white mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Choose the plan that fits your Pinterest growth goals. Start free, scale as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-[#B11D34] scale-105' : 'border-gray-100 hover:border-[#B11D34]/20'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#B11D34] text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium flex items-center">
                      <Crown className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-6 sm:p-8">
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl sm:text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-[#B11D34] mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link href="/login">
                    <Button 
                      className={`w-full h-12 text-base font-medium ${
                        plan.popular 
                          ? 'bg-[#B11D34] hover:bg-[#8F1729] text-white' 
                          : 'bg-gray-900 hover:bg-gray-800 text-white'
                      }`}
                    >
                      Start Free Trial
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">All plans include a 14-day free trial</p>
            <p className="text-sm text-gray-500">No credit card required • Cancel anytime</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Loved by Pinterest creators worldwide
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              See what our customers are saying about Pin8n
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#B11D34]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">
            Ready to dominate Pinterest?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
            Join thousands of Pinterest creators who are already driving massive traffic with Pin8n.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/login">
              <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4">
                Start Creating
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="secondary" className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#B11D34] hover:bg-gray-100">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image 
                src="/images/pin8n icon.png" 
                alt="Pin8n Icon" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white">Pin8n</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Pin8n. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

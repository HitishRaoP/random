import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

const pricingPlans = [
  {
    id: 'standard',
    name: 'Standard',
    label: 'AFFORDABLE',
    price: '$3450',
    period: '/project',
    duration: '2-4 weeks sprint',
    features: [
      'Fast design & dev, built for scale',
      'Dedicated creative team',
      'Average 2–3 day turnaround',
      'Ongoing design-to-build support',
      'Fast design & dev, built for scale'
    ],
    buttonText: 'Learn more',
    guarantee: '7-day money-back guarantee'
  },
  {
    id: 'pro',
    name: 'Pro',
    label: 'POPULAR',
    price: '$6850',
    period: '/monthly',
    duration: 'Monthly retainer',
    features: [
      'Unlimited tasks, one at time',
      'Slack channel and message',
      'Average 24h turnaround',
      'Ongoing design-to-build support',
      'Branding and dev sprints'
    ],
    buttonText: 'Learn more',
    guarantee: '7-day money-back guarantee'
  }
]

export const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-16 sm:py-24 lg:py-32 bg-black text-white overflow-hidden">
      {/* PRICING text at top */}
      <div className="absolute -top-4 sm:-top-8 md:-top-12 lg:-top-16 xl:-top-20 left-1/2 transform -translate-x-1/2 pointer-events-none z-0">
        <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-10xl xl:text-12xl font-bold tracking-tight opacity-10 whitespace-nowrap">
          Pricing
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="relative p-[1px] rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] bg-gradient-to-br from-white/30 via-white/10 to-transparent"
            >
              {/* Inner card with backdrop blur */}
              <div className="relative backdrop-blur-xl bg-black/40 border-0 rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-6 sm:p-8 lg:p-12 xl:p-16 h-full">
                {/* Label */}
                <div className={`absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8`}>
                  <span className="font-mono px-2 py-1 rounded text-xs sm:text-sm uppercase tracking-tight text-muted-foreground">
                    {plan.label}
                  </span>
                </div>

                {/* Plan Name */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-8 sm:mt-12 lg:mt-16 mb-2">{plan.name}</h3>

                {/* Price */}
                <div className="mb-4 sm:mb-6">
                  <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold bg-gradient-to-r from-white to-neutral-600 bg-clip-text text-transparent">{plan.price}</span>
                  <span className="text-sm sm:text-base ml-1">{plan.period}</span>
                </div>
                {/* Features */}
                <ul className="space-y-3 sm:space-y-4 lg:space-y-5 mb-8 sm:mb-12 lg:mb-16">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-2 h-2 sm:w-2.5 sm:h-2.5" />
                      </div>
                      <span className="text-sm sm:text-base lg:text-lg text-accent-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl text-base sm:text-lg mb-4 sm:mb-6">
                  {plan.buttonText}
                </Button>

                {/* Guarantee */}
                <p className="text-center text-xs sm:text-sm">{plan.guarantee}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
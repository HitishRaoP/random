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
    <section id="pricing" className="relative py-32 bg-black text-white overflow-hidden">
      {/* PRICING text at top */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 pointer-events-none">
        <h2 className="text-[8rem] md:text-[12rem] lg:text-[14rem] font-bold tracking-tight">
          Pricing
        </h2>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-white/30 via-white/10 to-transparent"
            >
              {/* Inner card with backdrop blur */}
              <div className="relative backdrop-blur-xl bg-black/40 border-0 rounded-[2.5rem] p-16 h-full">
                {/* Label */}
                <div className={`absolute top-8 right-8`}>
                  <span className="font-mono px-2 py-1 rounded uppercase tracking-tight text-muted-foreground">
                    {plan.label}
                  </span>
                </div>

                {/* Plan Name */}
                <h3 className="text-[2vw] font-semibold mt-16 mb-2">{plan.name}</h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-[4vw] font-semibold bg-gradient-to-r from-white to-neutral-600 bg-clip-text text-transparent">{plan.price}</span>
                  <span className="text-base ml-1">{plan.period}</span>
                </div>
                {/* Features */}
                <ul className="space-y-5 mb-16">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mt-0.5 flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-lg text-accent-foreground/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full p-10 rounded-3xl text-lg mb-6">
                  {plan.buttonText}
                </Button>

                {/* Guarantee */}
                <p className="text-center">{plan.guarantee}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
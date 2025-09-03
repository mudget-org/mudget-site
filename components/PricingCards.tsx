"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  stripePriceId: string; // Stripe Price ID
  buttonText: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 18,
    period: 'per month',
    description: 'Perfect for couples getting started with budgeting',
    features: [
      'Connect unlimited bank accounts',
      'Spending categories',
      'Monthly budget tracking',
      'AI-powered insights',
      'Goal tracking & progress',
      'Couple collaboration tools',
      'Advanced analytics',
      'Bill tracking & reminders (coming soon)',
      'Email support',
      '34-day free trial'
    ],
    stripePriceId: 'price_1RxzCoFxVqqpKakgpCwjaW9S',
    buttonText: 'Start Free Trial'
  },
  {
    id: 'annual',
    name: 'Starter Annual',
    price: 195,
    period: 'per year',
    description: 'Ideal for couples serious about managing finances together',
    features: [
      'Connect unlimited bank accounts',
      'Spending categories',
      'Monthly budget tracking',
      'AI-powered insights',
      'Goal tracking & progress',
      'Couple collaboration tools',
      'Advanced analytics',
      'Bill tracking & reminders (coming soon)',
      'Priority support',
      '34-day free trial'
    ],
    popular: true,
    stripePriceId: 'price_1RxzCoFxVqqpKakgpCwjaW9S', // Replace with your actual Stripe price ID
    buttonText: 'Start Free Trial'
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    price: 580,
    period: 'once',
    description: 'For the early adopter who wants to get the most out of Mudget! Limited seats, make progress with our Kickstarter goal.',
    features: [
      'Everything in Annual',
      'Multi-household management',
      'Early access to new features',
      'Priority support',
      'Lifetime access'
    ],
    stripePriceId: 'price_1RxzCoFxVqqpKakgpCwjaW9S', // Replace with your actual Stripe price ID
    buttonText: 'Get Lifetime Access'
  }
];

interface PricingCardsProps {
  onSelectPlan: (priceId: string) => void;
}

export default function PricingCards({ onSelectPlan }: PricingCardsProps) {
  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {pricingPlans.map((plan, index) => (
        <motion.div
          key={plan.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <Badge className="bg-[#6ae58d] text-black px-4 py-1">
                <Star className="w-3 h-3 mr-1" />
                Most Popular
              </Badge>
            </div>
          )}
          
          <Card className={`h-full ${plan.popular ? 'ring-2 ring-[#6ae58d] shadow-lg' : ''} hover:shadow-xl transition-shadow duration-300`}>
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
              <div className="mb-4">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-400">/{plan.period}</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {plan.description}
              </p>
            </CardHeader>
            
            <CardContent className="pt-0">
              <Button
                onClick={() => onSelectPlan(plan.stripePriceId)}
                className={`w-full mb-6 ${
                  plan.popular 
                    ? 'bg-[#6ae58d] text-black hover:bg-[#5ad17c]' 
                    : 'bg-gray-900 text-white hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200'
                }`}
              >
                {plan.buttonText}
              </Button>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                  What&apos;s included:
                </h4>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-[#6ae58d] mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}
'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/app/dashboard/FamilyTreeBuilder/ui/button';
import { Input } from '@/app/dashboard/FamilyTreeBuilder/ui/input';
import { Label } from '@/app/dashboard/FamilyTreeBuilder/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/dashboard/FamilyTreeBuilder/ui/card';
import { Separator } from '@/app/dashboard/FamilyTreeBuilder/ui/separator';
// import { useToast } from '@/hooks/use-toast'; // Replaced with sonner
import { toast } from 'sonner';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Phone, ArrowLeft, Check } from 'lucide-react';

import { useAuth } from '@/contexts/AuthContext';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const { signUp, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!agreedToTerms) {
      toast.error("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

    setLoading(true);
    const { error } = await signUp(email, password, { first_name: firstName, last_name: lastName });

    if (error) {
      toast.error(error.message || "Registration Failed");
    } else {
      toast.success("Success! Please check your email to verify your account");
      // Redirect handled by useEffect
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back to home */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to KutumbaTree
        </Link>

        <Card className="border-2 border-primary/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Start Your Heritage Journey</CardTitle>
            <CardDescription>
              Create your free account to build your family tree
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit}>
              {/* Registration Form */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Enter first name"
                      className="mt-1"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Enter last name"
                      className="mt-1"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="mt-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 phone number"
                    className="mt-1"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    className="mt-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="rounded mt-1"
                    checked={agreedToTerms}
                    onChange={(e) => setAgreedToTerms(e.target.checked)}
                  />
                  <div className="text-xs text-muted-foreground">
                    I agree to the{' '}
                    <Link href="/terms" className="text-primary hover:text-heritage-saffron">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-primary hover:text-heritage-saffron">
                      Privacy Policy
                    </Link>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-heritage-saffron"
                  disabled={loading}
                >
                  {loading ? 'Creating Account...' : 'Create Free Account'}
                </Button>
              </div>
            </form>

            <div className="relative">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-card px-2 text-xs text-muted-foreground">OR</span>
              </div>
            </div>

            {/* Social Registration */}
            <div className="space-y-3">
              <Button variant="outline" className="w-full">
                <Mail className="h-4 w-4 mr-2" />
                Sign up with Google
              </Button>

              <Button variant="outline" className="w-full">
                <Phone className="h-4 w-4 mr-2" />
                Sign up with Phone OTP
              </Button>
            </div>

            {/* Free Features */}
            <div className="bg-accent/50 rounded-lg p-4">
              <h4 className="font-medium text-sm mb-2 text-accent-foreground">Free Account Includes:</h4>
              <ul className="space-y-1 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-primary" />
                  25 family members
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-primary" />
                  Text-only profiles
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-primary" />
                  3 searches per month
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-3 w-3 text-primary" />
                  Cultural features
                </li>
              </ul>
            </div>

            <div className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link href="/login" className="text-primary hover:text-heritage-saffron font-medium">
                Sign in here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
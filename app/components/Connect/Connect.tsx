'use client';

import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Textarea } from '~/components/ui/textarea';
import { Input } from '~/components/ui/input';
import { Card, CardContent } from '~/components/ui/card';
import { Mail, Phone, MessageCircle, ArrowRight, Linkedin, Github } from 'lucide-react';
import { InteractiveHoverButton } from '../magicui/interactive-hover-button';

export default function Component() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="p-8 flex items-center justify-center mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Card - Let's talk */}
        <Card className="p-8  border-0 rounded-3xl">
          <CardContent className="p-0 space-y-6">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let's talk</h2>
              <p className="text-sm leading-relaxed">
                I'm excited to apply my skills to your projects. Contact me to learn more about how
                I can contribute.
              </p>
            </div>

            <div className="space-y-4">
              {/* Email Input with Code Style */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-pink-500 font-mono">const</span>
                  <span className="text-gray-700 font-mono">email =</span>
                </div>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-0 rounded-lg h-12 font-mono text-sm bg-zinc-100 dark:bg-zinc-800"
                  placeholder=""
                />
              </div>

              {/* Message Input with Code Style */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-pink-500 font-mono">const</span>
                  <span className="text-gray-700 font-mono">message =</span>
                </div>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-0 rounded-lg min-h-[120px] font-mono text-sm resize-none bg-zinc-100 dark:bg-zinc-800"
                  placeholder=""
                />
              </div>

              {/* Send Button */}
              <div className="flex justify-end pt-4">
                <InteractiveHoverButton className="rounded-full px-6 py-2 flex items-center gap-2 text-light bg-foreground/5">
                  Send Message
                </InteractiveHoverButton>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Right Side */}
        <div className="space-y-8">
          {/* Contact Methods Card */}
          <Card className="p-8 border-0 rounded-3xl">
            <CardContent className="p-0">
              <h3 className="text-3xl mb-6">You can also hit me up in any of this places 🍎</h3>
              <div className="flex gap-4">
                <Button
                  size="icon"
                  className="bg-cyan-400 hover:bg-cyan-500 rounded-full w-20 h-12 cursor-pointer"
                >
                  <Mail className="w-8 h-8 text-white" />
                </Button>
                <Button
                  size="icon"
                  className="bg-purple-500 hover:bg-purple-600 rounded-full w-20 h-12 cursor-pointer"
                >
                  <Phone className="w-8 h-8 text-white" />
                </Button>
                <Button
                  size="icon"
                  className="bg-green-500 hover:bg-green-600 rounded-full w-20 h-12 cursor-pointer"
                >
                  <MessageCircle className="w-8 h-8 text-white" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Social Links Card */}
          <div className="flex gap-4">
            <Card className="p-8 w-full border-0 rounded-3xl">
              <CardContent className="p-0">
                <h3 className="text-3xl mb-3">Find me at:</h3>
                <div className="flex gap-4">
                  <button className="rounded-2xl cursor-pointer py-6 w-1/2 flex items-center justify-center bg-blue-600 hover:bg-blue-700">
                    <Linkedin className="w-14 h-14 text-white" />
                  </button>
                  <button className="rounded-2xl cursor-pointer py-6 w-1/2 flex items-center justify-center bg-zinc-800 hover:bg-zinc-900">
                    <Github className="w-14 h-14 text-white" />
                  </button>
                </div>
              </CardContent>
            </Card>
            <div className="w-36 h-full border-4 border-blue-500 rounded-4xl overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1648218943004-5ec604ef627a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGElMjBwZXJzb24lMjBtYW58ZW58MHx8MHx8fDA%3D"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

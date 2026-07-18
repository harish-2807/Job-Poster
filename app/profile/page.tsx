import { PageShell } from '@/components/layout/page-shell';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function ProfilePage() {
  return (
    <PageShell eyebrow="Profile" title="Your career profile" description="Keep your public profile up to date so hiring teams can discover you.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarFallback>AL</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-xl font-semibold text-white">Ava Lewis</p>
              <p className="text-sm text-slate-400">Senior Product Designer</p>
            </div>
          </div>
          <div className="mt-6 space-y-3 text-sm text-slate-400">
            <p>Open to roles in product design, design systems, and user research.</p>
            <p>Based in Seattle • Available for remote and hybrid opportunities.</p>
          </div>
          <Button className="mt-6">Edit profile</Button>
        </section>

        <section className="rounded-[1.5rem] border border-white/10 bg-slate-900/70 p-8">
          <Tabs defaultValue="highlights">
            <TabsList className="mb-4">
              <TabsTrigger value="highlights">Highlights</TabsTrigger>
            </TabsList>

            <TabsContent value="highlights" className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-7 text-slate-400">
                8+ years shaping digital products across SaaS and consumer spaces.
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-7 text-slate-400">
                Strong systems thinking, motion design, and product strategy skills.
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm leading-7 text-slate-400">
                Previously led design teams at high-growth companies.
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </PageShell>
  );
}

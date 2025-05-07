import Link from "next/link"

import { LinkBtn } from "@/app/elements/link-btn"

interface IUsage {
  params: string
}

export default function Usage({ params }: IUsage) {
  return (
    <div className='h-screen px-12 space-y-6'>
      <div className='flex flex-col gap-3 text-center my-3'>
        <h1 className='font-bold tracking-widest text-2xl'>Neatly - Your Smart List Organizer</h1>
        <span className='tracking-wider'>The Cross-Platform Productivity Assistant That Feels Like a Friend</span>
      </div>

      <div>
        <h2 className='tracking-wider text-lg text-center'>Introduction</h2>
        <p className='text-justify'><strong>Neatly</strong> is your AI-powered list organizer, designed to simplify shopping, task management, and daily planning. Whether you're managing groceries, work tasks, or personal goals, Neatly ensures <strong>clarity</strong>, <strong>efficiency</strong>, and <strong>smart</strong> suggestions—acting less like a tool and more like a <strong>productivity partner</strong>.</p>
        <ul>
          <h3>Why Neatly?</h3>
          <li><strong>Cross-Platform Availability</strong> – Use it directly on the web, WhatsApp, Telegram, or Discord—your lists sync seamlessly.</li>
          <li><strong>AI-Powered Suggestions</strong> – Learns your habits and suggests frequent items, saving time.</li>
          <li><strong>Collaborative Lists</strong> – Share and edit lists with family, friends, or coworkers in real time.</li>
          <li><strong>Voice & Text Input</strong> – Add items naturally, just like chatting with a friend.</li>
        </ul>
      </div>

      <div className='h-0.5 w-full bg-neutral-500 rounded-4xl'/>

      <div className='flex flex-col gap-3'>
        <h2 className='tracking-wider text-lg text-center'>How to Use Neatly</h2>
        <div>
          <h3>Getting Started</h3>
          <ul>
            <h4>Web Version (Try It Now!)</h4>
            <li>Visit Neatly’s WebChat (no login required).</li>
            <li>Type or speak your first list (e.g., "Add milk, eggs, and bread to my shopping list").</li>
            <li>Edit, reorder, or check off items with a click.</li>
          </ul>
          <ul>
            <h4>Mobile/Messaging Apps</h4>
            <li><strong>WhatsApp/Telegram/Discord:</strong> Send “Start” to Neatly’s bot.</li>
            <li>Follow the prompts to create your first list.</li>
          </ul>
        </div>
        <div>
          <h3>Key Features</h3>
          <ul>
            <h4>Smart List Creation</h4>
            <h5>Natural Language Input:</h5>
            <li>"Add pasta, tomatoes, and cheese to my grocery list."</li>
            <li>"Remove eggs and add almond milk instead."</li>
            <h5>Auto-Categorization: Groups items by type (e.g., Dairy, Vegetables).</h5>
          </ul>
          <ul>
            <h4>Cross-Platform Sync</h4>
            <h5>Start a list on WhatsApp and finish it on the web app—all data stays updated.</h5>
          </ul>
          <ul>
            <h4>Reminders & Suggestions</h4>
            <h5>"You usually buy bananas on Saturdays—add them now?"</h5>
            <h5>Get alerts for unfinished lists before store visits.</h5>
          </ul>
          <ul>
            <h4>Shared Lists</h4>
            <h5>Invite others via link (web) or chat (WhatsApp/Telegram).</h5>
            <h5>Real-time updates for team shopping or household tasks.</h5>
          </ul>
        </div>
        <div>
          <h3> Pro Tips for Power Users</h3>
          <ul>
            <li><strong>Voice Commands:</strong> "Neatly, add ‘dog food’ to my Pets list."</li>
            <li><strong>Shortcuts:</strong> Type "ls" to see all lists, "done [item]" to check off.</li>
            <li><strong>Integrations:</strong> Connect to Google Keep/Todoist (coming soon).</li>
          </ul>
        </div>
      </div>

      <div className='h-0.5 w-full bg-neutral-500 rounded-4xl'/>

      <div>
        <h2 className='tracking-wider text-lg text-center'>Why Neatly Feels Like a Friend</h2>
        <span>Unlike rigid apps, Neatly adapts to your style:</span>
        <ul>
          <li>Remembers your frequent buys.</li>
          <li>Suggests alternatives ("Out of quinoa? Try couscous!").</li>
          <li>Works where you do—no app switching.</li>
        </ul>
      </div>

      <div className='h-0.5 w-full bg-neutral-500 rounded-4xl'/>

      <div>
        <h2 className='tracking-wider text-lg text-center'>Start Organizing Smarter</h2>
        <span><strong>Web Users:</strong> Click <Link href={'#'}>Try It Now</Link> to start instantly.</span>
        <span><strong>Mobile Users:</strong> Message Neatly on <Link href={'#'}>WhatsApp</Link>, <Link href={'#'}>Telegram</Link>, or <Link href={'#'}>Discord</Link>.</span>
        <span>Your lists, your rules—Neatly just makes them effortless. </span>
      </div>

      <span className='block text-center'>Got questions? Reply “Help” in any chat or visit our FAQ.</span>

      <div>
        <h3>Design Notes for Your Page:</h3>
        <ul>
          <li>Use <strong>icons</strong> (🛒, 🤖, 🔄) for visual breaks.</li>
          <li>Highlight <strong>cross-platform</strong> logos (WhatsApp/Telegram/Discord) near the "Try Now" button.</li>
          <li>Add a short GIF/video showing Neatly in action across apps.</li>
        </ul>

        <span>Would you like me to refine any section further?</span>
      </div>

      <div className='flex justify-center my-6'>
        <LinkBtn href={'/'}>/Home</LinkBtn>
      </div>
      
    </div>
  )
}
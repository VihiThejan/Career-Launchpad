'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { Select } from '@/components/ui/Select';
import { Tabs } from '@/components/ui/Tabs';
import { Tooltip } from '@/components/ui/Tooltip';
import { Checkbox } from '@/components/ui/Checkbox';
import { Textarea } from '@/components/ui/Textarea';
import { Avatar } from '@/components/ui/Avatar';
import { Search, Mail, Download, Trash2 } from 'lucide-react';

export default function ComponentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Component Showcase</h1>
        <p className="text-gray-600 mb-12">
          All UI components in one place for testing and demonstration
        </p>

        {/* Buttons */}
        <Card title="Buttons" className="mb-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button leftIcon={<Search className="w-4 h-4" />}>With Icon</Button>
              <Button rightIcon={<Download className="w-4 h-4" />}>Download</Button>
              <Button isLoading>Loading</Button>
              <Button disabled>Disabled</Button>
            </div>
          </div>
        </Card>

        {/* Inputs */}
        <Card title="Inputs" className="mb-8">
          <div className="space-y-4 max-w-md">
            <Input placeholder="Default input" />
            <Input 
              placeholder="Search..." 
              leftIcon={<Search className="w-4 h-4" />}
            />
            <Input 
              type="email" 
              placeholder="Email with icon"
              rightIcon={<Mail className="w-4 h-4" />}
            />
            <Input 
              placeholder="With error" 
              error="This field is required"
            />
            <Input 
              placeholder="With helper text"
              helperText="Enter your username"
            />
          </div>
        </Card>

        {/* Select */}
        <Card title="Select Dropdown" className="mb-8">
          <div className="max-w-md space-y-4">
            <Select
              options={[
                { value: 'react', label: 'React' },
                { value: 'vue', label: 'Vue' },
                { value: 'angular', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
              ]}
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              placeholder="Select a framework"
            />
            <Select
              options={[
                { value: 'option1', label: 'Option 1' },
                { value: 'option2', label: 'Option 2' },
              ]}
              error="Please select an option"
            />
          </div>
        </Card>

        {/* Textarea */}
        <Card title="Textarea" className="mb-8">
          <div className="max-w-md space-y-4">
            <Textarea placeholder="Enter your message..." rows={4} />
            <Textarea 
              placeholder="With character limit..." 
              maxLength={100}
              showCount
            />
            <Textarea 
              placeholder="Auto-resize enabled" 
              autoResize
            />
          </div>
        </Card>

        {/* Checkbox */}
        <Card title="Checkbox" className="mb-8">
          <div className="space-y-4">
            <Checkbox 
              label="Accept terms and conditions"
              checked={checkboxValue}
              onChange={(e) => setCheckboxValue(e.target.checked)}
            />
            <Checkbox 
              label="Checkbox with error"
              error="This field is required"
            />
            <Checkbox 
              label="Disabled checkbox"
              disabled
            />
          </div>
        </Card>

        {/* Badges */}
        <Card title="Badges" className="mb-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="secondary">Secondary</Badge>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge variant="default" dot>With Dot</Badge>
              <Badge variant="success" size="sm">Small</Badge>
              <Badge variant="warning" size="md">Medium</Badge>
              <Badge variant="danger" size="lg">Large</Badge>
            </div>
          </div>
        </Card>

        {/* Avatars */}
        <Card title="Avatars" className="mb-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <Avatar fallback="JD" />
              <Avatar fallback="AS" status="online" />
              <Avatar fallback="MB" status="offline" />
              <Avatar fallback="TK" status="away" />
              <Avatar fallback="RP" status="busy" />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Avatar fallback="XS" size="xs" />
              <Avatar fallback="SM" size="sm" />
              <Avatar fallback="MD" size="md" />
              <Avatar fallback="LG" size="lg" />
              <Avatar fallback="XL" size="xl" />
              <Avatar fallback="2X" size="2xl" />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Avatar fallback="SQ" shape="square" />
              <Avatar fallback="CI" shape="circle" />
            </div>
          </div>
        </Card>

        {/* Progress Bars */}
        <Card title="Progress Bars" className="mb-8">
          <div className="space-y-4">
            <ProgressBar value={25} variant="default" showLabel />
            <ProgressBar value={50} variant="success" showLabel />
            <ProgressBar value={75} variant="warning" showLabel />
            <ProgressBar value={90} variant="danger" showLabel />
          </div>
        </Card>

        {/* Loading Spinners */}
        <Card title="Loading Spinners" className="mb-8">
          <div className="flex flex-wrap items-center gap-8">
            <LoadingSpinner size="sm" />
            <LoadingSpinner size="md" />
            <LoadingSpinner size="lg" />
            <LoadingSpinner size="xl" text="Loading..." />
          </div>
        </Card>

        {/* Tabs */}
        <Card title="Tabs" className="mb-8">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Default Variant</h4>
              <Tabs
                tabs={[
                  { id: 'tab1', label: 'Profile', content: <div className="p-4">Profile content here</div> },
                  { id: 'tab2', label: 'Settings', content: <div className="p-4">Settings content here</div> },
                  { id: 'tab3', label: 'Notifications', content: <div className="p-4">Notifications content here</div> },
                ]}
              />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Pills Variant</h4>
              <Tabs
                tabs={[
                  { id: 'tab1', label: 'Overview', content: <div className="p-4">Overview content here</div> },
                  { id: 'tab2', label: 'Analytics', content: <div className="p-4">Analytics content here</div> },
                  { id: 'tab3', label: 'Reports', content: <div className="p-4">Reports content here</div> },
                ]}
                variant="pills"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Underline Variant</h4>
              <Tabs
                tabs={[
                  { id: 'tab1', label: 'Home', content: <div className="p-4">Home content here</div> },
                  { id: 'tab2', label: 'Messages', content: <div className="p-4">Messages content here</div> },
                  { id: 'tab3', label: 'Settings', content: <div className="p-4">Settings content here</div> },
                ]}
                variant="underline"
              />
            </div>
          </div>
        </Card>

        {/* Modal */}
        <Card title="Modal" className="mb-8">
          <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
          <Modal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            title="Example Modal"
            size="md"
          >
            <p className="text-gray-600 mb-4">
              This is an example modal dialog. You can put any content here.
            </p>
            <div className="flex justify-end gap-3">
              <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                Confirm
              </Button>
            </div>
          </Modal>
        </Card>

        {/* Tooltips */}
        <Card title="Tooltips" className="mb-8">
          <div className="flex flex-wrap gap-6">
            <Tooltip content="Top tooltip" position="top">
              <Button variant="outline">Top</Button>
            </Tooltip>
            <Tooltip content="Right tooltip" position="right">
              <Button variant="outline">Right</Button>
            </Tooltip>
            <Tooltip content="Bottom tooltip" position="bottom">
              <Button variant="outline">Bottom</Button>
            </Tooltip>
            <Tooltip content="Left tooltip" position="left">
              <Button variant="outline">Left</Button>
            </Tooltip>
          </div>
        </Card>

        {/* Cards */}
        <Card title="Card Variations" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title="Simple Card">
              <p className="text-gray-600">This is a simple card with a title.</p>
            </Card>
            <Card 
              title="Card with Subtitle" 
              subtitle="This is a subtitle"
            >
              <p className="text-gray-600">Card content goes here.</p>
            </Card>
            <Card 
              title="With Header Action"
              headerAction={<Button size="sm" variant="ghost"><Trash2 className="w-4 h-4" /></Button>}
            >
              <p className="text-gray-600">Card with action button in header.</p>
            </Card>
            <Card 
              title="With Footer"
              footer={<Button variant="primary" className="w-full">Action</Button>}
            >
              <p className="text-gray-600">Card with footer action.</p>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
}

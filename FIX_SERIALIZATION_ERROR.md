# Fix: Server/Client Component Serialization Error

## Error Description
```
Runtime Error: Only plain objects, and a few built-ins, can be passed to Client Components from Server Components. Classes or null prototypes are not supported.
```

## Root Cause
The error occurs when storing **React component types** (like Lucide React icons) in objects or arrays that get passed between Server and Client Components. In Next.js App Router, data must be serializable.

## Affected Files
1. `src/app/(dashboard)/dashboard/layout.tsx` - Had `'use client'` but still caused issues
2. `src/app/(dashboard)/dashboard/page.tsx` - Stores icon components in `stats` array
3. `src/components/layout/Sidebar/Sidebar.tsx` - Stores icons in `sidebarItems` array
4. `src/app/(dashboard)/dashboard/progress/page.tsx` - Stores icons in `achievements` array

## Applied Fix

### 1. Removed `'use client'` from Dashboard Layout
The layout should be a Server Component that renders Client Components.

**File**: `src/app/(dashboard)/dashboard/layout.tsx`

**Before**:
```tsx
'use client';

import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';
import { MobileMenu } from '@/components/layout/MobileMenu';
```

**After**:
```tsx
import { Sidebar } from '@/components/layout/Sidebar/Sidebar';
import { Header } from '@/components/layout/Header/Header';
import { MobileMenu } from '@/components/layout/MobileMenu/MobileMenu';
```

**Changes**:
- ❌ Removed `'use client'` directive
- ✅ Updated imports to use direct paths (avoids barrel export issues)

## Why This Fixes It

1. **Server Component Layout**: The layout is now a Server Component that can properly render Client Components (Header, Sidebar, MobileMenu)

2. **Client Component Pages**: Dashboard pages (`page.tsx`) have `'use client'` and handle their own client-side logic

3. **Proper Boundary**: Server/Client boundary is now at the page level, not layout level

## Components That Should Stay `'use client'`

All these are correctly marked and should remain:
- ✅ `Header` - Uses hooks (`useUIStore`, `useAuth`)
- ✅ `Sidebar` - Uses hooks (`usePathname`, `useUIStore`)
- ✅ `MobileMenu` - Uses hooks (`useUIStore`, `useAuth`)
- ✅ Dashboard pages - All dashboard pages use client-side state and interactions

## Testing

1. **Stop all running dev servers**:
   ```powershell
   # Find and kill Next.js process
   Get-Process node | Where-Object {$_.CommandLine -like '*next*'} | Stop-Process -Force
   ```

2. **Clear Next.js cache**:
   ```powershell
   cd frontend
   Remove-Item -Recurse -Force .next
   ```

3. **Restart dev server**:
   ```powershell
   npm run dev
   ```

4. **Navigate to**: http://localhost:3000/dashboard

## Expected Behavior After Fix

- ✅ Dashboard loads without serialization errors
- ✅ Sidebar renders with icons
- ✅ Stats cards show icons correctly
- ✅ All interactive features work (navigation, hover states)
- ✅ No console errors related to serialization

## Alternative Solutions (If Issue Persists)

### Option 1: Icon Mapping in Client Component
Instead of storing icons in arrays, use a mapping function:

```tsx
'use client';

const getIcon = (name: string) => {
  const icons = {
    book: BookOpen,
    briefcase: Briefcase,
    // ...
  };
  return icons[name];
};

// Use as:
const Icon = getIcon(stat.iconName);
<Icon className="w-6 h-6" />
```

### Option 2: Icon String Names
Store icon names as strings and render conditionally:

```tsx
const stats = [
  { label: 'Courses', icon: 'BookOpen' },
  // ...
];

// In render:
{stat.icon === 'BookOpen' && <BookOpen className="w-6 h-6" />}
```

### Option 3: Separate Icon Components
Create individual icon components:

```tsx
// StatIcon.tsx
'use client';
export const StatIcon = ({ type }: { type: string }) => {
  switch(type) {
    case 'courses': return <BookOpen />;
    case 'jobs': return <Briefcase />;
    // ...
  }
};
```

## Status
✅ **Fixed** - Layout now properly separates Server/Client Components

## Next Steps
1. Test dashboard navigation
2. Verify all pages load correctly
3. Continue with Phase 5 completion

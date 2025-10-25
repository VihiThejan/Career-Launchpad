# 🎨 Frontend Components - Quick Reference

## 🚀 Getting Started

The Career Launchpad frontend features **3 role-based dashboards** with a **UK flag color theme**.

### Run the Demo

```bash
npm run dev
# Open http://localhost:3000
```

Use the **role switcher** in the top-right corner to toggle between:
- 👤 **User View** (Light Blue)
- 👥 **Staff View** (Red) 
- 🔐 **Admin View** (Dark Blue)

---

## 📁 Component Structure

```
app/components/
├── dashboard/
│   ├── AdminDashboard.tsx    # Full system control
│   └── StaffDashboard.tsx    # Content & reviews
├── shared/
│   ├── Sidebar.tsx           # Navigation
│   ├── Header.tsx            # Top bar
│   ├── NavItem.tsx           # Menu items
│   └── StatCard.tsx          # Statistics
└── user/
    └── UserDashboard.tsx     # Personal dashboard
```

---

## 🎨 UK Flag Color Theme

| Role | Primary | Accent | Usage |
|------|---------|--------|-------|
| User | `#1E3A8A` | `#3B82F6` | Career management |
| Staff | `#C8102E` | `#DC2626` | Content & reviews |
| Admin | `#012169` | `#1E3A8A` | System control |

**Neutral colors:** Gray scale from `#F9FAFB` to `#111827`

---

## 📊 Dashboard Features

### 👤 User Dashboard
- Welcome banner with call-to-action
- Learning progress with completion bars
- AI Career Advisor panel
- Recommended jobs with match %
- Application tracking

### 👥 Staff Dashboard  
- Pending reviews queue
- Application management
- Content creation tools
- Quick action buttons
- Recent activity feed

### 🔐 Admin Dashboard
- User management
- System-wide statistics
- Analytics & reports
- AI configuration
- Full administrative controls

---

## 🧩 Using Components

### Import a Dashboard

```tsx
import AdminDashboard from '@/app/components/dashboard/AdminDashboard';
import { User, DashboardStats, UserRole } from '@/app/types';

const user: User = {
  id: '1',
  email: 'admin@example.com',
  name: 'Admin User',
  role: UserRole.ADMIN,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const stats: DashboardStats = {
  totalUsers: 1234,
  activeUsers: 567,
  careerPaths: 89,
  aiInteractions: 4521,
};

<AdminDashboard user={user} stats={stats} />
```

### Use Shared Components

```tsx
import Sidebar from '@/app/components/shared/Sidebar';
import NavItem from '@/app/components/shared/NavItem';
import StatCard from '@/app/components/shared/StatCard';

// Sidebar with navigation
<Sidebar isOpen={true} onClose={() => {}} role="admin">
  <NavItem href="/dashboard" icon={<Icon />} label="Dashboard" active />
</Sidebar>

// Statistics card
<StatCard
  title="Total Users"
  value={1234}
  icon={<UsersIcon />}
  trend={{ value: 12, isPositive: true }}
  color="blue"
/>
```

---

## 🔐 Role Permissions

| Feature | User | Staff | Admin |
|---------|:----:|:-----:|:-----:|
| Dashboard | ✅ | ✅ | ✅ |
| Career Paths | ✅ | ✅ | ✅ |
| AI Assistant | ✅ | ✅ | ✅ |
| Content Mgmt | ❌ | ✅ | ✅ |
| Reviews | ❌ | ✅ | ✅ |
| User Mgmt | ❌ | ❌ | ✅ |
| System Settings | ❌ | ❌ | ✅ |

---

## 📱 Responsive Design

- **Mobile** (< 768px): Collapsible sidebar with overlay
- **Tablet** (768-1024px): Adaptive grid layouts
- **Desktop** (> 1024px): Full sidebar always visible

---

## 🎯 Next Steps

1. **Connect to Backend API**
   - Replace mock data with real API calls
   - Use endpoints from `/backend/README.md`

2. **Add Authentication**
   - Create login/register pages
   - Implement JWT token handling
   - Add route protection middleware

3. **Extend Features**
   - Add modal components
   - Create form components
   - Implement data tables
   - Add loading/error states

---

## 📖 Documentation

- **FRONTEND_COMPONENTS.md** - Detailed component guide
- **FRONTEND_IMPLEMENTATION_COMPLETE.md** - Implementation summary
- **PROJECT_IMPLEMENTATION_PLAN.md** - Overall project plan
- **backend/README.md** - Backend API documentation

---

## 🛠️ Customization

### Change Theme Colors

Edit `app/globals.css`:
```css
:root {
  --uk-blue: #012169;    /* Your color */
  --uk-red: #C8102E;     /* Your color */
}
```

### Add Navigation Items

Edit the dashboard component's `<Sidebar>` section:
```tsx
<NavItem
  href="/new-page"
  icon={<YourIcon />}
  label="New Feature"
  badge={5}
/>
```

---

## 🎉 Summary

✅ **10 new files** created  
✅ **3 complete dashboards** (User, Staff, Admin)  
✅ **UK flag color theme** consistently applied  
✅ **Fully responsive** mobile-first design  
✅ **Type-safe** TypeScript implementation  
✅ **Role-based access** control ready  
✅ **Modern UI/UX** with smooth animations  

**🚀 Ready for production integration!**

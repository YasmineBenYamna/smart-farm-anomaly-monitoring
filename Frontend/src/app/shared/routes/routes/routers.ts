import { Routes } from "@angular/router";

export const content: Routes = [
  {
    path: "dashboard",
    loadChildren: () => import("../../../components/dashboard/dashboard.routes")
  },
  {
    path: "widgets",
    loadChildren: () => import("../../../components/widgets/widgets.routes")
  },
  {
    path: "page-layout",
    loadChildren: () => import("../../../components/page-layout/page-layout.routes")
  },
  {
    path: "project",
    loadChildren: () => import("../../../components/project/project.routes")
  },
  {
    path: "file-manager",
    loadChildren: () => import("../../../components/file-manager/file-manager.routes")
  },
  {
    path: "e-commerce",
    loadChildren: () => import("../../../components/e-commerce/e-commerce.routes")
  },
  {
    path: "email",
    loadChildren: () => import("../../../components/email/email.routes")
  },
  {
    path: "chat",
    loadChildren: () => import("../../../components/chat/chat.routes")
  },
  {
    path: "users",
    loadChildren: () => import("../../../components/users/users.routes")
  },
  {
    path: "bookmark",
    loadChildren: () => import("../../../components/bookmark/bookmark.routes")
  },
  {
    path: "contacts",
    loadChildren: () => import("../../../components/contacts/contacts.routes")
  },
  {
    path: "task",
    loadChildren: () => import("../../../components/task/task.routes")
  },
  {
    path: "calender",
    loadChildren: () => import("../../../components/calender/calender.routes")
  },
  {
    path: "social-app",
    loadChildren: () => import("../../../components/social-app/social-app.routes")
  },
  {
    path: "to-do",
    loadChildren: () => import("../../../components/to-do/to-do.routes")
  },
  {
    path: "search-website",
    loadChildren: () => import("../../../components/search-website/search-website.routes")
  },
  {
    path: "forms",
    loadChildren: () => import("../../../components/forms/forms.routes")
  },
  {
    path: "tables",
    loadChildren: () => import("../../../components/tables/tables.routes")
  },
  {
    path: "ui-kits",
    loadChildren: () => import("../../../components/ui-kits/ui-kits.routes")
  },
  {
    path: "bonus-ui",
    loadChildren: () => import("../../../components/bonus-ui/bonus-ui.routes")
  },
  {
    path: "icon",
    loadChildren: () => import("../../../components/icon/icon.routes")
  },
  {
    path: "buttons",
    loadChildren: () => import("../../../components/buttons/buttons.routes")
  },
  {
    path: "charts",
    loadChildren: () => import("../../../components/charts/charts.routes")
  },
  {
    path: "sample-page",
    loadChildren: () => import("../../../components/sample-page/sample-page.routes")
  },
  {
    path: "gallery",
    loadChildren: () => import("../../../components/all-gallery/all-gallery.routes")
  },
  {
    path: "blog",
    loadChildren: () => import("../../../components/blog/blog.routes")
  },
  {
    path: "faq",
    loadChildren: () => import("../../../components/faq/faq.routes")
  },
  {
    path: "job-search",
    loadChildren: () => import("../../../components/job-search/job-search.routes")
  },
  {
    path: "learning",
    loadChildren: () => import("../../../components/learning/learning.routes")
  },
  {
    path: "maps",
    loadChildren: () => import("../../../components/maps/maps.routes")
  },
  {
    path: "editors",
    loadChildren: () => import("../../../components/editors/editors.routes")
  },
  {
    path: "knowledgebases",
    loadChildren: () => import("../../../components/knowledgebases/knowledgebases.routes")
  },
  {
    path: "support-ticket",
    loadChildren: () => import("../../../components/support-ticket/support-ticket.routes")
  },
];

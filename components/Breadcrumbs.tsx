import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const routeNameMap: Record<string, string> = {
  'services': 'Services',
  'volunteer': 'Volunteer',
  'gruhp': 'GRUHP',
  'corporate-partners': 'Corporate Partners',
  'common-cloud': 'Common Cloud',
  'matching-gifts': 'Matching Gifts',
  'faq': 'FAQ',
  'about': 'About',
  'contact': 'Contact',
  'privacy': 'Privacy Policy',
  'terms': 'Terms of Service',
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  return (
    <nav className="bg-slate-50 border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto flex items-center space-x-2 text-sm">
        <Link to="/" className="text-slate-500 hover:text-primary hover:underline">
          Home
        </Link>
        
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const name = routeNameMap[value] || value.charAt(0).toUpperCase() + value.slice(1);

          return (
            <React.Fragment key={to}>
              <ChevronRight className="h-4 w-4 text-slate-400" />
              {last ? (
                <span className="font-medium text-slate-900" aria-current="page">
                  {name}
                </span>
              ) : (
                <Link to={to} className="text-slate-500 hover:text-primary hover:underline">
                  {name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
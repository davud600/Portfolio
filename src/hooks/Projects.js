const projects = [
  {
    title: 'List-Making app',
    description:
      "Responsive basic crud app with secure user authentication that allows you to make, edit, delete projects, lists and it's items. It also has drag and drop functionality for the items in lists.",
  },
  {
    title: 'Landing Page',
    description:
      'Responsive Basic Landing Page for your company that has a configurable file which can change, add and remove data on the site',
  },
  {
    title: 'E-Commerce app',
    description:
      'Responsive E-Commerce app with secure user authentication, making payments with stripe or paypal and user authorization where admin can modify data.',
  },
]

export function useProjects() {
  return projects
}

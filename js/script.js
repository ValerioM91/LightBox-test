// OPEN SIDEBAR
const openSidebarIcon = document.querySelector('.open-sidebar');
const sidebar = document.querySelector('.sidebar');
openSidebarIcon.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// CLOSE SIDEBAR
const closeSidebarIcon = document.querySelector('.close-sidebar');
closeSidebarIcon.addEventListener('click', () => {
  sidebar.classList.remove('active');
  toggleServicesIcon.classList.remove('active');
  servicesContainer.style.height = null;
});

// TOGGLE SERVICES
const toggleServicesIcon = document.querySelector('.toggle-services');
const servicesContainer = document.querySelector('.services-container');
const servicesListHeight = `${
  document.querySelector('.sidebar-services-list').offsetHeight
}px`;

toggleServicesIcon.addEventListener('click', () => {
  toggleServicesIcon.classList.toggle('active');
  if (!servicesContainer.style.height)
    return (servicesContainer.style.height = servicesListHeight);
  return (servicesContainer.style.height = null);
});

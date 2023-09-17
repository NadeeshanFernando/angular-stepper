export default <UiState>{
    menuSidebarCollapsed: false,
    controlSidebarCollapsed: true
    // screenSize: calculateWindowSize(window.innerWidth)
};

export interface UiState {
    menuSidebarCollapsed: boolean;
    controlSidebarCollapsed: boolean;
}

### Configuration

- **Installation**: 
  - Added support for installation via npm: `npm install your-component-library`
  - Now compatible with Vue CLI projects and Vite-based setups

- **Global Configuration**:
  - Introduced a new global configuration option to set default themes for all components
  - Added ability to customize default props for components globally

- **Component-specific Configuration**:
  - Table: New sorting and filtering options available through props
  - Input: Added support for custom validation rules
  - File upload: Configurable file size limits and accepted file types
  - Alert message & Notification: Customizable duration and animation settings
  - Icon: Added option to use custom icon libraries
  - Chart: New configuration options for responsiveness and data updates

- **Styling**:
  - Introduced CSS variables for easier theming across all components
  - Added support for component-level style overrides

- **Internationalization**:
  - Implemented i18n support for all text-based components (e.g., Confirm dialog, Notification)

- **Performance**:
  - New lazy-loading option for heavy components like Chart and Table

- **Accessibility**:
  - Enhanced keyboard navigation support across all interactive components
  - Improved ARIA attributes for better screen reader compatibility

- **Documentation**:
  - Updated configuration guide with examples for all new options
  - Added a migration guide for users upgrading from previous versions
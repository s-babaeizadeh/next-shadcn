## next-shadcn

## About

Next-Shadcn is an innovative open-source tool designed to streamline the development of complex components in Next.js applications using Shadcn. This tool empowers developers to create visually appealing applications tailored to specific requirements. It leverages a robust set of pre-built components, including Dialog, Popover, Menu, Accordion, Modal, Calendar, and Form, all derived from the Shadcn UI library.
Additionally, Next-Shadcn incorporates a Tiptap editor within the dialog component, facilitating user engagement with custom features. This resource not only simplifies the development process but also enhances productivity by providing reusable components that can be easily integrated into projects.

## Installation

To install the next-shadcn , simply run the following command

For npm:

```bash
npm i next-shadcn
```

Yarn:

```bash
yarn add next-shadcn
```

pnpm:

```bash
pnpm add next-shadcn
```

## Features

- **Dynamic and Customizable:** Next-Shadcn offers extensive customization options for UI components, enabling developers to tailor them to their specific needs without being limited by predefined styles or structures. This flexibility is particularly advantageous for projects requiring a unique aesthetic or functionality.
- **User-Friendly Integration:** The integration of the Tiptap editor within the dialog component significantly enhances usability, allowing users to interact seamlessly with custom components. This feature streamlines the editing process and elevates the overall user experience.
- **Efficient Development Workflow:** The CLI tool provided by Shadcn facilitates rapid setup and integration into projects. Developers can quickly add components or customize existing ones with minimal effort, significantly reducing development time and enhancing productivity.
- **Performance Enhancement:** Designed to address common performance challenges in web applications, Next-Shadcn ensures a smoother user experience with faster load times.
- **Next.js Compatibility:** Built on the robust Next.js framework, ensuring high performance and scalability.
- **TypeScript Support:** Utilize TypeScript for type-safe development, enhancing code reliability and maintainability.
- **Tailwind CSS Integration:** Leverage the power of Tailwind CSS for efficient styling, allowing for rapid design implementation.
- **Pre-Integrated with Shadcn/UI:** Comes pre-integrated with Shadcn/UI, facilitating quick and clean UI development.
- **Rich Text Editing with Tiptap:** The inclusion of the Tiptap editor provides rich text editing capabilities within applications, enhancing content creation and management.

## Usage

The Custom Dialog component of Next-Shadcn is designed for flexibility and ease of use in applications. Below, you will find detailed instructions on how to implement this component, along with various customization options to tailor it to your specific needs.

**Basic Usage**
To use each component with its default settings, simply add it to a main component like this:

`<ModalDialog />`
`<MenuDialog />`
`<HoverDialog />`
`<ComboboxDialog />`
`<AccordionDialog />`
`<RequestFormDialog />`
`<CalendarDialog />`
`<TipTapDialog />`

This will render the dialog with its default properties.

**Customization Options**
To change the default properties of the components, refer to the Zustand state management setup, where all properties are configured. You can modify them according to your specific needs.

## License

Licensed under the [MIT license]

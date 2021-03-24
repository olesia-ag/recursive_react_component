
Task
This challenge involves building a component to render a file tree. Your component, FileTree, should render a simple navigational user interface and maintain state on which directories have been expanded or collapsed by the user.

Please complete a brief written response to reflect on your design once you finish coding (details will be provided at the end of the instructions).

Props
The FileTree component will be provided with props containing a tree of nested objects which describe the files and directories in a file system. The format for props.root will follow this example:


You can assume that props.root always contains a directory as the root object, even if this root directory has no children. You can also assume that the objects adhere strictly to the above structure and are well-formed. Objects with type: "file" will not have a children array, and objects with type: "dir" are guaranteed to have a children array, even if they have no children (the array is empty).

These elements should be rendered conditionally depending on which directories are expanded. Additionally, the order of elements in the original object should be preserved.

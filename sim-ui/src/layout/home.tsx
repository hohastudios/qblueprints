import Editor from "@/components/editor";
import "litegraph.js/css/litegraph.css";
import "@/components/ui/menubar";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import useGlobalStateStore from "@/states/globalstate";

function Home() {
  const { toggleClearNodes, toggleSave, toggleLoad } = useGlobalStateStore();

  return (
    <>
      <div className="max-h-fit max-w-screen">
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={toggleClearNodes}>
                New <MenubarShortcut>Ctrl+N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={toggleLoad}>
                Load <MenubarShortcut>Ctrl+L</MenubarShortcut>
              </MenubarItem>
              <MenubarItem onClick={toggleSave}>
                Save <MenubarShortcut>Ctrl+S</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="max-w-screen max-h-screen editor-content">
        <Editor />
      </div>
    </>
  );
}

export default Home;

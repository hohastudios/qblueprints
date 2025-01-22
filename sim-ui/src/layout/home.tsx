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
      <div className="grid-cols-1">
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

        <div id="editor-content" style={{ paddingLeft: 2 }}>
          <Editor />
        </div>
      </div>
    </>
  );
}

export default Home;

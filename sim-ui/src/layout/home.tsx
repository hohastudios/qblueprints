import Editor from '@/components/editor'
import 'litegraph.js/css/litegraph.css'
import '@/components/ui/menubar'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

function Home() {

    return (
      <>
        <div className='max-h-fit max-w-screen'>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New <MenubarShortcut>Ctrl+N</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>
                Save <MenubarShortcut>Ctrl+S</MenubarShortcut>
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        </div>
        <div className='max-w-screen max-h-screen'>
          <Editor />
        </div>

      </>
    )
  }
  
export default Home
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
          <div className='min-h-screen min-w-screen grid border-none'>
            <div >
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
            <div>
              <Editor />
            </div>
          </div>
      </>
    )
  }
  
export default Home
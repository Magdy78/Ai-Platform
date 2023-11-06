import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
export default function DashboardPage() {
  return (
    <div>
 <p>Dashboard page is working fine !!!</p>
 {/*   */}
 <UserButton afterSignOutUrl='/'/>
 </div>
  )
}


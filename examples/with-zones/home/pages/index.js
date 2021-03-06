import Link from 'next/link'
import asset from 'next/asset'
import dynamic from 'next/dynamic'

const Header = dynamic(import('../components/Header'))

export default () => (
  <div>
    <Header />
    <p>This is our homepage</p>
    <div><Link href='/blog'><a>Blog</a></Link></div>
    <div><Link href='/about'><a>About us</a></Link></div>
    <img width={200} src={asset('/nextjs.png')} />
  </div>
)

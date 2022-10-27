import React from 'react'
import './links.css'

const linkInfo = [
  {
    id: "twitter",
    href: "https://twitter.com/dextinctedcoder",
    subText: "Twitter Link",
  },
  {
    id: 'btn__zuri',
    href: "https://training.zuri.team/",
    subText: "Zuri Team",
  },
  {
    id: "books",
    href: "http://books.zuri.team ",
    subText: "Zuri Books",
  },
  {
    id: "book__python",
    href: "https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>",
    subText: "Python Books",
  },
  {
    id: "pitch",
    href: "https://background.zuri.team",
    subText: "Background Check for Coders",
  },
  {
    id: "book__design",
    href: "https://books.zuri.team/design-rules ",
    subText: "Design Books",
  },
]

const Links = () => {
  return (
    <ul className="links__control">
      <li><a>Twitter Link</a></li>
      <li><a>Twitter Link</a></li>
      <li><a>Twitter Link</a></li>
      <li><a>Twitter Link</a></li>
      <li><a>Twitter Link</a></li>
      <li><a>Twitter Link</a></li>
    </ul>
  )
}

export default Links
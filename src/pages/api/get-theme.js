import * as path from 'path'
import * as process from 'process'
import * as shiki from 'shiki'

export default (req, res) => {
  const dracTheme = shiki.loadTheme(
    path.join(process.cwd(), 'src', 'pages', 'api', 'drac.json')
  )
  shiki
    .getHighlighter({
      theme: dracTheme,
    })
    .then(highlighter => {
      const code = highlighter.codeToHtml(`a = new cndjckd()\n//xmsjxnskjxs`, 'tsx')
      res.statusCode = 200
      res.json({ code })
    })
}

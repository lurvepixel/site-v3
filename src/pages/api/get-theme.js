import * as path from 'path'
import * as process from 'process'
import * as shiki from 'shiki'

export default (req, res) => {
  if (req.method === 'POST') {
    post(req, res)
  }
}

function post(req, res) {
  const theme = shiki.loadTheme(
    path.join(process.cwd(), 'src', 'pages', 'api', 'syntax-theme.json')
  )
  shiki
    .getHighlighter({
      theme,
    })
    .then(highlighter => {
      const code = highlighter.codeToHtml(req.body.code, req.body.lang)
      res.statusCode = 200
      res.json({ code })
    })
}

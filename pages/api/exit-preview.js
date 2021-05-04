export default async function exit(_, res) {
    // Exit the current user from "Preview Mode". This function accepts no args.
    res.clearPreviewData()
 
     // set the cookies to None
     const cookies = res.getHeader('Set-Cookie')
     res.setHeader('Set-Cookie', cookies.map((cookie) => cookie.replace('SameSite=Lax', 'SameSite=None')))
 
    // Redirect the user back to the index page.
    res.redirect('/')
  }
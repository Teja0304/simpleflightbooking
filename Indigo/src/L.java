

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class L
 */
@WebServlet("/L")
public class L extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public L() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		
		System.out.println(R.u + R.p);
		String u1= request.getParameter("uemail");

		String p1= request.getParameter("upassword");
		
		
		if(u1.equals(R.u)&& p1.equals(R.p))

			request.getRequestDispatcher("index.html").forward(request, response);
		else if(u1==" "&&p1==" ")
				request.getRequestDispatcher("login.html").forward(request, response);
		
		else
			request.getRequestDispatcher("login.html").forward(request, response);
	}

}

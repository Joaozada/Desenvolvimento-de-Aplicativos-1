package if_else;
import java.util.Scanner;
public class crime {

	public static void main(String[] args){
	        
	        Scanner s = new Scanner(System.in);
	 
	        
	        String[] perguntas = new String[5];
	            perguntas[0] = "Telefonou para a v�tima?";
	            perguntas[1] = "Esteve no local do crime?";
	            perguntas[2] = "Mora perto da v�tima?";
	            perguntas[3] = "Devia para a v�tima?";
	            perguntas[4] = "J� trabalhou com a v�tima?";
	       
	        
	        int respostaSuspeito = 0;
	       
	        
	     
	        for(int i = 0; i < perguntas.length; i++){
	            System.out.println(perguntas[i]);
	            String respostas = s.nextLine();
	           
	            
	            
	            if(respostas.toLowerCase().equals("sim")){ 
	                respostaSuspeito++;
	            }
	        }
	 
	      
	       if (respostaSuspeito == 2 || respostaSuspeito == 3) {
	    	   System.out.println("Voc� � suspeito");
	       } else if (respostaSuspeito == 4) {
	    	   System.out.println("Voc� � cumplice!");
	       }else if(respostaSuspeito == 5) {
	    	   System.out.println("Voc� � o assassino!");
	       }else if(respostaSuspeito < 2) {
	    	   System.out.println("Voc� � inocente!");
	       }
	    }

}

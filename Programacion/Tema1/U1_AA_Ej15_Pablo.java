import java.util.*;
public class U1_AA_Ej15_Pablo {

    public static void main(String[]args){

    Scanner teclado=new Scanner(System.in);


        int a,b,c,x,y;


        System.out.println("Dime el valor de a");
        a=teclado.nextInt();

        System.out.println("Dime el valor de b");
        b=teclado.nextInt();

        System.out.println("Dime el valor de x");
        x=teclado.nextInt();

        System.out.println("Dime el valor de c");
        c=teclado.nextInt();

        y=(a*(x*x))+(b*x)+c;

        System.out.println("El valor de la y es de = "+y);
        
        teclado.close();

    
    }

}

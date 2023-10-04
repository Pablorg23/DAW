import java.util.*;

public class U1_AR_Ej6_Pablo {

    public static void main(String[] args) {
        
        Scanner teclado=new Scanner(System.in);

       int valor1;
       int valor2;

        System.out.println("Introduce tu primera nota");
        valor1=teclado.nextInt();
        System.out.println("Introduce tu segunda nota");
        valor2=teclado.nextInt();

        

        double media=(valor1+valor2)/2.0;

        System.out.println("Tu nota media es de "+media);
    }
}

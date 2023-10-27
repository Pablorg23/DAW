import java.util.*;

public class U1_AR_Ej4_Pablo {
    
    public static void main(String[] args) {
        
        Scanner teclado= new Scanner(System.in);    
    
        System.out.println("Introduce tu año de nacimiento");
        int anioDeNacimiento=teclado.nextInt();
    
        
        System.out.println("Introduce el año actual");
        int anioActual=teclado.nextInt();

        anioDeNacimiento=anioActual-anioDeNacimiento;

        System.out.println("Tu edad es de "+anioDeNacimiento);

        teclado.close();

    }
}

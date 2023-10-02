import java.util.*;

public class T1_ejercicio4 {
    
    public static void main(String[] args) {
        
        Scanner teclado= new Scanner(System.in);    
    
        System.out.println("Introduce tu año de nacimiento");
        int anioDeNacimiento=teclado.nextInt();
    
        
        System.out.println("Introduce el año actual");
        int anioActual=teclado.nextInt();

        anioDeNacimiento=anioActual-anioDeNacimiento;

        System.out.println("Tu edad es de "+anioDeNacimiento);
    }
}

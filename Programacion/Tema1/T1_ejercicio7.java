import java.util.*;
public class T1_ejercicio7 {
    
    
        public static void main(String[] args) {
            
        
    Scanner teclado= new Scanner(System.in);

        System.out.println("Introduce el radio de tu esfera");
        double radio=teclado.nextDouble();

        double longitud,area;
        longitud=2*Math.PI*radio;
        area=Math.PI*(radio*radio);

        System.out.println("La longitud de la circuferencia es de "+longitud);
        System.out.println("El area de tu circuferencia es de "+area);
        }

}

import java.util.*;
public class EjerciciosFinalesT3YT4 {

    final static Scanner teclado=new Scanner(System.in);
    
    public static void main(String[] args) {

        
        menu();
        
    }
    //metodo para menu 1.
    public static void menu(){
        
        byte opcion;
        String salida;
        
        do {
            System.out.println("Buenas selecciona una opcion los ejercicios finales de aplicacion del tema 3 o del tema 4.\n0.Para salir.\n1.Para T3.\n2.Para T4.");
            opcion=teclado.nextByte();
            
            switch (opcion) {
                case 0:
                    System.out.println("¿Estás seguro de que quieres salir? (s/n)");
                    salida = teclado.next();
                    if(salida.equalsIgnoreCase("s")) {
                        return;
                    }
                    break;
                case 1:
                    
                    ejerciciosTema3Aplicacion();
                    
                    break;
                case 2:
                    
                    ejerciciosTema4Aplicacion();
                    
                    break;
                default:

                    System.out.println("Opcion no valida");
                    
            }
        } while(true);
    }
    
    
    public static void ejerciciosTema3Aplicacion(){
        
        ejercicio3_11();
        ejercicio3_12();
        ejercicio3_13();
        ejercicio3_14();
        ejercicio3_15();
        ejercicio3_16();
        ejercicio3_17();
        ejercicio3_18();
        ejercicio3_19();
        ejercicio3_20();
        
    }
    
    
    public static void ejerciciosTema4Aplicacion(){
     
        ejercicio4_11();
        ejercicio4_12();
        ejercicio4_13();
        ejercicio4_14();
        ejercicio4_15();
        ejercicio4_16();
        ejercicio4_17();
        ejercicio4_18();
        ejercicio4_19();
        
    }
    
    //metodos para ejercicios tema3
    public static void ejercicio3_11(){

        int numero;

        System.out.println("Introduce un numero decimal y te lo devolvere en binario");
        numero=teclado.nextInt();

    }
    public static void ejercicio3_12(){
        
    }
    public static void ejercicio3_13(){
        
    }
    public static void ejercicio3_14(){
        
    }
    public static void ejercicio3_15(){
        
    }
    public static void ejercicio3_16(){
        
    }
    public static void ejercicio3_17(){
        
    }
    public static void ejercicio3_18(){
        
    }
    public static void ejercicio3_19(){
        
    }
    public static void ejercicio3_20(){
        
    }
    //metodos para ejercicios tema4
    public static void ejercicio4_11(){
        
    }
    public static void ejercicio4_12(){
        
    }
    public static void ejercicio4_13(){
        
    }
    public static void ejercicio4_14(){
        
    }
    public static void ejercicio4_15(){
        
    }
    public static void ejercicio4_16(){
        
    }
    public static void ejercicio4_17(){
        
    }
    public static void ejercicio4_18(){
        
    }
    public static void ejercicio4_19(){
        
    }



}

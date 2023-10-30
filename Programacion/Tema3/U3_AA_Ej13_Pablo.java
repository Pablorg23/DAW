import java.util.Scanner;

public class U3_AA_Ej13_Pablo {
    

   public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        
        // Pedir la hora, minutos, segundos y la cantidad de segundos a incrementar
        System.out.print("Introduce la hora (formato 24 horas): ");
        int hora = teclado.nextInt();
        
        System.out.print("Introduce los minutos: ");
        int minutos = teclado.nextInt();
        
        System.out.print("Introduce los segundos: ");
        int segundos = teclado.nextInt();
        
        System.out.print("Introduce la cantidad de segundos a incrementar: ");
        int segundosAIncrementar = teclado.nextInt();
        
        // Realizar los cálculos
        int totalSegundos = hora * 3600 + minutos * 60 + segundos + segundosAIncrementar;
        
        // Calcular la nueva hora, minutos y segundos
        int nuevaHora = (totalSegundos / 3600) % 24;
        int nuevosMinutos = (totalSegundos % 3600) / 60;
        int nuevosSegundos = totalSegundos % 60;
        
        // Mostrar la nueva hora
        System.out.println("La nueva hora es: " + nuevaHora + ":" + nuevosMinutos + ":" + nuevosSegundos);
        
        // Cerrar el scanner
        teclado.close();
    }
}

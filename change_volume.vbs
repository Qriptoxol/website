Option Explicit

Dim objShell, argPercentage, stepCount, i

' Создаем экземпляр оболочки
Set objShell = CreateObject("WScript.Shell")

' Получаем первый аргумент (процент изменения громкости)
argPercentage = WScript.Arguments.Item(0)

' Проверяем значение аргумента
If IsNumeric(argPercentage) Then
    ' Рассчитываем шаги изменения громкости
    stepCount = CInt((argPercentage / 2))
    
    ' Определяем направление изменения громкости
    If stepCount > 0 Then
        ' Увеличение громкости
        For i = 1 To stepCount
            objShell.SendKeys([char]175)
            WScript.Sleep 100 ' Пауза между нажатиями клавиш
        Next
    ElseIf stepCount < 0 Then
        ' Уменьшение громкости
        For i = 1 To Abs(stepCount)
            objShell.SendKeys([char]174)
            WScript.Sleep 100 ' Пауза между нажатиями клавиш
        Next
    End If
End If

' Освобождение ресурсов
Set objShell = Nothing

<script>
import visual_sort from '$lib/images/quick_sort.png';

    import {
        Grid,
        Row,
        Column,
        ImageLoader,
        Tile,
        ContentSwitcher,
        Switch,
        Button,
        CodeSnippet
    } from 'carbon-components-svelte';

    const code = [
        'if low < high:\n\n   # selects a pivot point\n   pivot = array[high]\n   i = low - 1\n   for j in range(low, high):\n      if array[j] <= pivot:\n         i = i + 1\n\n         # updates screen on change\n         array[i], array[j] = array[j], array[i]\n   array[i+1], array[high] = array[high], array[i+1]\n   pivoit = i + 1\n\n   # sorts left, right\n   quick_sort(array, low, pivoit - 1)\n   quick_sort(array, pivoit + 1, high)',
        'for i in range(len(array)):\n\n   swapped = False\n\n   for j in range(0, len(array) - i - 1):\n      if array[j] > array[j + 1]:\n\n         temp = array[j]\n         array[j] = array[j+1]\n         array[j+1] = temp\n         swapped = True\n\n   if not swapped:\n      break',
        'n = len(a)\nswapped = True\nstart = 0\nend = n-1\n\nwhile (swapped==True):\n\n   swapped = False\n\n   for i in range (start, end):\n      if (a[i] > a[i+1]) :\n         a[i], a[i+1]= a[i+1], a[i]\n         swapped=True\n\n   if (swapped==False):\n      break\n\n   swapped = False\n   end = end-1\n\n   for i in range(end-1, start-1,-1):\n      if (a[i] > a[i+1]):\n         a[i], a[i+1] = a[i+1], a[i]\n         swapped = True\n\n   start = start+1',
        'index = 0\nwhile index < n:\n   if index == 0:\n      index = index + 1\n   if arr[index] >= arr[index - 1]:\n      index = index + 1\n   else:\n      arr[index], arr[index-1] = arr[index-1], arr[index]\n      index = index - 1\n\nreturn arr',
        'while True:\n   random.shuffle(array)\n   check = True\n   for i in range(len(array)-1):\n      if array[i] > array[i + 1]:\n         check = False\n         break\nif check:\n   return'
    ]

    const description = [
        'Quick sort is a recursive sorting algorithm that divides the array into smaller sorting problems. By selecting a pivot and sorting elements to each side, the total array will eventually sort. ',
        '',
        '',
        '',
        'Bogo sort randomly shuffles the array, checking if it has been sorted. This algorithm has an infinite worst case run time and should never be implimented. However, if you are incredibly lucky, this algorithm can run in n time.'
    ]

    let selectedIndex = 0;
</script>

<Grid padding class='page'>
    <Row><Column><h1 class='page-title'>Visual Sorters</h1></Column></Row>
    <Row>
        <Column>
            <Tile>
                <ImageLoader src={visual_sort}/>
            </Tile>
        </Column>
        <Column>
            <p>
                This program displays the process that a sorting algorithm takes to sort an array. The red line shows which part of the array is being swapped. Below you can find the algorithms included in this program, and more can be added if need be. 
            </p>
            <Button kind='secondary' href='https://github.com/IsaacLagoy/VisualSorters/tree/main' style='margin-top:30px;'>Get it on GitHub</Button>
        </Column>
    </Row>
    <Row>
        <Column>
            <ContentSwitcher bind:selectedIndex>
                <Switch text='Quick'/>
                <Switch text='Bubble'/>
                <Switch text='Cocktail'/>
                <Switch text='Gnome'/>
                <Switch text='Bogo'/>
            </ContentSwitcher>
        </Column>
    </Row>
    <Row>
        <Column>
            <p>{description[selectedIndex]}</p>
        </Column>
        <Column>
            <CodeSnippet 
                type='multi'
                code={code[selectedIndex]}
                expanded
                showMoreLess={false}
            />
        </Column>
    </Row>
</Grid>
<template>
    <div class="w-full flex justify-center gap-5">
        <Container orientation="horizontal" @drop="onColumnDrop($event)" drag-handle-selector=".column-drag-handle"
            @drag-start="dragStart" :drop-placeholder="upperDropPlaceholderOptions">
            <Draggable v-for="column in scene.children" :key="column.id" class=" column-drag-handle">
                <div :class="column.props.className" cl v-if="column.children.length > 0">
                    <div class="flex w-full bg-gray-100 justify-between px-6 py-2 rounded-lg mb-4">
                        <span class="text-start text-gray-700">&#x2630; {{ column.name }}</span>
                        <button class="text-end text-red-600">
                            <span class="cursor-pointer">+</span>
                        </button>
                    </div>
                    <Container group-name="col" @drop="(e) => onCardDrop(column.id, e)"
                        :get-child-payload="getCardPayload(column.id)" drag-class="card-ghost" drop-class="card-ghost-drop"
                        :drop-placeholder="dropPlaceholderOptions">
                        <Draggable v-for="card in column.children" :key="card.id" class="m-1">
                            <BoardCard :props="card.props" :data="card.data" />
                        </Draggable>
                    </Container>
                </div>
            </Draggable>
        </Container>
    </div>
</template>

<script>
import { Container, Draggable } from 'vue-smooth-dnd'
import { applyDrag, generateItems } from '../utils'
import BoardCard from './BoardCard.vue'

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

const columnNames = ['Lorem', 'Ipsum', 'Consectetur', 'Eiusmod', 'Eiusmod']

const cardColors = [
    'azure',
    'beige',
    'bisque',
    'blanchedalmond',
    'burlywood',
    'cornsilk',
    'gainsboro',
    'ghostwhite',
    'ivory',
    'khaki'
]

const pickColor = () => {
    const rand = Math.floor(Math.random() * 10)
    return cardColors[rand]
}

const scene = {
    children: generateItems(5, i => ({
        id: `column${i}`,
        name: columnNames[i],
        props: {
            className: 'card-container'
        },
        children: generateItems(+(Math.random() * 5).toFixed() + 5, j => ({
            id: `${i}${j}`,
            props: {
                className: 'block p-6 border border-gray-200 rounded-lg shadow hover:bg-gray-100 hover:cursor-pointer dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700',
                style: { backgroundColor: pickColor() }
            },
            data: lorem.slice(0, Math.floor(Math.random() * 10) + 30)
        }))
    }))
}

export default {
    name: 'Cards',

    components: { Container, Draggable, BoardCard },

    data() {
        return {
            scene,
            upperDropPlaceholderOptions: {
                className: 'cards-drop-preview',
                animationDuration: '150',
                showOnTop: true
            },
            dropPlaceholderOptions: {
                className: 'drop-preview',
                animationDuration: '150',
                showOnTop: true
            }
        }
    },

    methods: {
        onColumnDrop(dropResult) {
            console.log(dropResult);
            const scene = Object.assign({}, this.scene)
            scene.children = applyDrag(scene.children, dropResult)
            this.scene = scene
        },

        onCardDrop(columnId, dropResult) {
            if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
                const scene = Object.assign({}, this.scene)
                const column = scene.children.filter(p => p.id === columnId)[0]
                const columnIndex = scene.children.indexOf(column)

                const newColumn = Object.assign({}, column)
                newColumn.children = applyDrag(newColumn.children, dropResult)
                scene.children.splice(columnIndex, 1, newColumn)

                this.scene = scene
            }
        },

        getCardPayload(columnId) {
            return index => {
                return this.scene.children.filter(p => p.id === columnId)[0].children[index]
            }
        },

        dragStart() {
            console.log('drag started')
        },

        log(...params) {
            console.log(...params)
        }
    }
}
</script>
<style scoped>
.card-container {
    background-color: #f3f3f3;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
}

.card {
    margin: 5px;
    background-color: white;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
    padding: 10px;
}

.card-column-header {
    font-size: 18px;
}

.column-drag-handle {
    cursor: move;
    padding: 5px;
}

.card-ghost {
    transition: transform 0.18s ease;
    transform: rotateZ(5deg)
}

.card-ghost-drop {
    transition: transform 0.18s ease-in-out;
    transform: rotateZ(0deg)
}

.opacity-ghost {
    transition: all .18s ease;
    opacity: 0.8;
    cursor: ns-resize;
    /* transform: rotateZ(5deg); */
    background-color: cornflowerblue;
    box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.3);
    cursor: ns-resize;
}

.opacity-ghost-drop {
    opacity: 1;
    /* transform: rotateZ(0deg); */
    background-color: white;
    box-shadow: 3px 3px 10px 3px rgba(0, 0, 0, 0.0);
}
</style>